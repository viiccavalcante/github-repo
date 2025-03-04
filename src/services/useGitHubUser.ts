import { useState, useEffect } from 'react';
import { User } from '../types/User';

export function useGitHubUser(username: string) {
  const [user, setUser] = useState<User>();
  const [loadingUser, setLoadingUser] = useState(true);
  const [errorUser, setErrorUser] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoadingUser(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_GITHUB_TOKEN,
            },
          },
        );
        if (!response.ok) throw new Error('Error to find user.');
        const data: User = await response.json();
        setUser(data);
      } catch (err) {
        setErrorUser('Error to find user.');
      } finally {
        setLoadingUser(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { user, loadingUser, errorUser };
}
