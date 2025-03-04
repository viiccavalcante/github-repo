import { useParams } from 'react-router-dom';
import { useGitHubUser } from '../hooks/githubUser';
import { useGitHubRepos } from '../hooks/GitHubRepos';
import { useState } from 'react';
import {
  Input,
  Select,
  SmText,
  Option,
} from '../components/shared/GlobalStyle';
import styled from 'styled-components';
import ProfileColumn from '../components/ProfileColumn';
import RepositoryCard from '../components/RepositoryCard';

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  min-height: 95vh;
  width: 100%;
`;

const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

const SearchContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  justify-items: center;
`;

export function UserRepos() {
  const { username } = useParams<{ username: string }>();
  const { user, loadingUser, errorUser } = useGitHubUser(username || '');
  const [languageFilter, setLanguageFilter] = useState<string>('');
  const { repos, loadingRepos, errorRepos, allLanguages, setSearchRepoName } =
    useGitHubRepos(username || '', languageFilter);

  return (
    <Wrapper>
      <>
        <ProfileColumn
          user={user}
          loadingUser={loadingUser}
          errorUser={errorUser}
        />
      </>

      <ContentColumn>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Search by repo name"
            onChange={(e) => setSearchRepoName(e.target.value)}
          />
          <Select
            defaultValue=""
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <Option value="">Search by Language</Option>
            {allLanguages?.map((language, index) => (
              <Option key={index} value={language}>
                {language}
              </Option>
            ))}
          </Select>
        </SearchContainer>

        {loadingRepos && <SmText>Loading repositories...</SmText>}
        {errorRepos && <SmText>{errorRepos}</SmText>}

        {repos && repos.length > 0 ? (
          <RepoGrid>
            {repos.map((repo) => (
              <RepositoryCard repository={repo} />
            ))}
          </RepoGrid>
        ) : (
          <SmText>No repositories found</SmText>
        )}
      </ContentColumn>
    </Wrapper>
  );
}
