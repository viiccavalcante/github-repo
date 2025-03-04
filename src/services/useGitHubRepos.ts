import { useState, useEffect } from 'react';
import { Repository } from '../types/Repository';

export function useGitHubRepos(username: string, language?: string) {
  const [allRepos, setAllRepos] = useState<Repository[]>([]);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [errorRepos, setErrorRepos] = useState<string | null>(null);
  const [allLanguages, setAllLanguages] = useState<string[]>([]);
  const [searchRepoName, setSearchRepoName] = useState<string>('');

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoadingRepos(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: import.meta.env.VITE_GITHUB_TOKEN,
            },
          },
        );
        if (!response.ok) throw new Error('Error to find repos from user.');
        let data: Repository[] = await response.json();

        setAllRepos(data);
        setAllLanguages(Array.from(new Set(data.map((repo) => repo.language))));
        setRepos(data);
      } catch (err) {
        setErrorRepos('Error to find repos from user.');
      } finally {
        setLoadingRepos(false);
      }
    }

    fetchRepos();
  }, [username]);

  useEffect(() => {
    let filteredRepos = [...allRepos];

    if (language) {
      filteredRepos = filteredRepos.filter(
        (repo) => repo.language === language,
      );
    }

    if (searchRepoName) {
      filteredRepos = filteredRepos.filter((repo) =>
        repo.name.toLowerCase().includes(searchRepoName.toLowerCase()),
      );
    }

    setRepos(filteredRepos);
  }, [searchRepoName, language, allRepos]);

  return { repos, loadingRepos, errorRepos, allLanguages, setSearchRepoName };
}
