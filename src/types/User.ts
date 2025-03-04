export interface User {
  id: number;
  name: string;
  login: string;
  html_url: string;
  bio: string | null;
  avatar_url: string | null;
}