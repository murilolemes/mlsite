'use client';

import { cn } from '@/lib/utils';
import { apiGitHub } from '@/services/api';
import {
  ArrowSquareOutIcon,
  GitForkIcon,
  SpinnerIcon,
  StarIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface GitHubProps {
  id: string;
  name: string;
  html_url: string;
  description: string;
  language: string;
  visibility: string;
  stargazers_count: number;
  forks: number;
}

export default function Repositories() {
  const [repositories, setRepositories] = useState<GitHubProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGitHub.get<GitHubProps[]>(
        '/users/murilolemes/repos',
      );
      setRepositories(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div
      className={`w-full py-4 ${
        loading
          ? 'flex h-24 items-center justify-center'
          : 'grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4'
      } `}
    >
      {loading && <SpinnerIcon size={48} className="animate-spin" />}

      {repositories.map((repo) => (
        <div
          key={repo.id}
          className={cn(
            'flex h-56 w-full flex-col justify-between rounded-xl',
            'border border-gray-50/10 bg-gray-900/70 p-4 transition-all',
            'duration-500 hover:-translate-y-[5px] hover:border-gray-300',
          )}
        >
          {/* HEADER */}
          <div className="flex justify-between">
            <h3 className="text-base font-normal">{repo.name}</h3>

            <Link href={repo.html_url} target="_blank">
              <div className="flex h-4 w-4 items-center justify-center">
                <ArrowSquareOutIcon size={14} weight="bold" />
              </div>
            </Link>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm font-medium text-gray-300">
            {repo.description}
          </p>

          {/* FOOTER */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              {/* Language dot */}
              <span className="mr-2 h-[14px] w-[14px] rounded-full bg-purple-500" />

              <p className="flex items-center gap-2 text-sm text-gray-300">
                {repo.language}
              </p>

              <p
                className={`ml-4 flex items-center gap-2 text-sm ${
                  repo.stargazers_count > 0 ? 'text-gray-100' : 'text-gray-300'
                } `}
              >
                <StarIcon
                  size={14}
                  weight="bold"
                  className={repo.stargazers_count > 0 ? 'text-yellow-500' : ''}
                />
                {repo.stargazers_count}
              </p>

              <p
                className={`ml-4 flex items-center gap-2 text-sm ${
                  repo.forks > 0 ? 'text-gray-100' : 'text-gray-300'
                } `}
              >
                <GitForkIcon
                  size={14}
                  weight="bold"
                  className={repo.forks > 0 ? 'text-green-500' : ''}
                />
                {repo.forks}
              </p>
            </div>

            <p
              className={cn(
                'flex w-fit items-center justify-center rounded-[10px] bg-gray-500 px-4 py-2 text-xs',
              )}
            >
              {repo.visibility}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
