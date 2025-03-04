export interface Repository {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string | null;
  updated_at: Date;
}