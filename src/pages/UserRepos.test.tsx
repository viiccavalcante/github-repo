import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { UserRepos } from './UserRepos';
import { useParams } from 'react-router-dom';
import { useGitHubUser } from '../services/useGitHubUser';
import { useGitHubRepos } from '../services/useGitHubRepos';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.mock('../services/useGitHubUser', () => ({
  useGitHubUser: vi.fn(),
}));

vi.mock('../services/useGitHubRepos', () => ({
  useGitHubRepos: vi.fn(),
}));

const mockUser = {
  id: 1,
  login: 'testeuser',
  name: 'teste user',
  html_url: '',
  bio: null,
  avatar_url: null,
};

const mockRepos = [
  {
    id: 1,
    name: 'Repo 1',
    language: 'TypeScript',
    description: null,
    updated_at: new Date(),
    html_url: '',
  },
  {
    id: 2,
    name: 'Repo 2',
    language: 'Java',
    description: 'description',
    updated_at: new Date(),
    html_url: '',
  },
];

describe('UserRepos errors and loadings', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(useParams).mockReturnValue({ username: 'testuser' });
  });

  it('renders loadings', () => {
    vi.mocked(useGitHubUser).mockReturnValue({
      loadingUser: true,
      user: undefined,
      errorUser: null,
    });
    vi.mocked(useGitHubRepos).mockReturnValue({
      loadingRepos: true,
      repos: [],
      errorRepos: null,
      allLanguages: [],
      setSearchRepoName: vi.fn(),
    });

    render(<UserRepos />);

    expect(screen.getByText('Loading...')).toBeDefined();
    expect(screen.getByText('Loading repositories...')).toBeDefined();
  });

  it('renders errors', () => {
    vi.mocked(useGitHubUser).mockReturnValue({
      loadingUser: false,
      user: undefined,
      errorUser: 'User error',
    });
    vi.mocked(useGitHubRepos).mockReturnValue({
      loadingRepos: false,
      repos: [],
      errorRepos: 'Repo error',
      allLanguages: [],
      setSearchRepoName: vi.fn(),
    });

    render(<UserRepos />);

    expect(screen.getByText('User error')).toBeDefined();
    expect(screen.getByText('Repo error')).toBeDefined();
  });
});

describe('UserRepos Repos returning', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(useParams).mockReturnValue({ username: 'testuser' });
    vi.mocked(useGitHubUser).mockReturnValue({
      loadingUser: false,
      user: mockUser,
      errorUser: null,
    });
  });

  it('renders repositories', () => {
    vi.mocked(useGitHubRepos).mockReturnValue({
      loadingRepos: false,
      repos: mockRepos,
      errorRepos: null,
      allLanguages: ['TypeScript', 'Java'],
      setSearchRepoName: vi.fn(),
    });

    render(<UserRepos />);

    expect(screen.getByText('teste user')).toBeDefined();

    expect(screen.getByText('Repo 1')).toBeDefined();
    expect(screen.getByText('Repo 2')).toBeDefined();
  });

  it('filters repositories by name', () => {
    const setSearchRepoName = vi.fn();
    vi.mocked(useGitHubRepos).mockReturnValue({
      loadingRepos: false,
      repos: mockRepos,
      errorRepos: null,
      allLanguages: [],
      setSearchRepoName,
    });

    render(<UserRepos />);

    const searchInput = screen.getByPlaceholderText('Search by repo name');
    fireEvent.change(searchInput, { target: { value: 'test repo name' } });

    expect(setSearchRepoName).toHaveBeenCalledWith('test repo name');
  });

  it('filters repositories by language', async () => {
    const useGitHubReposMock = vi.mocked(useGitHubRepos);

    useGitHubReposMock.mockReturnValue({
      loadingRepos: false,
      repos: mockRepos,
      errorRepos: null,
      allLanguages: ['JavaScript', 'TypeScript'],
      setSearchRepoName: vi.fn(),
    });

    render(<UserRepos />);

    const languageSelect = screen.getByRole('combobox');
    fireEvent.change(languageSelect, { target: { value: 'JavaScript' } });

    expect(useGitHubReposMock).toHaveBeenCalledWith('testuser', 'JavaScript');
  });
});
