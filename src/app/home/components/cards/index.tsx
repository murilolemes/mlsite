"use client"

import { apiGitHub } from "@/services/api";
import { ArrowSquareOutIcon, GitForkIcon, SpinnerIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardContainer, CardContent, CardFooter } from "./styles";

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
      const response = await apiGitHub.get<GitHubProps[]>('/users/murilolemes/repos');
      setRepositories(response.data);
      setLoading(false);
    }

    fetchData();
  }, [])

  return (
    <CardContainer isloading={loading}>
      {loading && <SpinnerIcon size={48} className="spinner" />}
      {repositories.map(repositorie => (
        <CardContent key={repositorie.id}>
          <div className="title-repo">
            <h3>{repositorie.name}</h3>
            <Link href={repositorie.html_url} target="_blank" rel="noopener noreferrer">
              <ArrowSquareOutIcon size={14} weight="bold" />
            </Link>
          </div>
          <p className="description">{repositorie.description}</p>
          <CardFooter>
            <div className="inf">
              <span />
              <p>{repositorie.language}</p>
              <p className={repositorie.stargazers_count > 0 ? 'starred' : ''}>
                <StarIcon size={14} weight="bold" />
                {repositorie.stargazers_count}
              </p>
              <p className={repositorie.forks > 0 ? 'forked' : ''}>
                <GitForkIcon size={14} weight="bold" />
                {repositorie.forks}
              </p>
            </div>
            <p className="public">{repositorie.visibility}</p>
          </CardFooter>
        </CardContent>
      ))}
    </CardContainer>
  )
}