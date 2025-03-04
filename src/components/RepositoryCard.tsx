import styled from 'styled-components';
import { Repository } from '../types/Repository';
import { H4, RotatedArrow, SmButton, SmText } from './shared/GlobalStyle';
import { MdCode } from 'react-icons/md';

type RepositoryCardProps = {
  repository: Repository;
};

const Card = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  border: 1px solid rgba(68, 67, 67, 0.12);
  padding: 1rem;
  border-radius: 1px;
  width: 230px;
  margin: 1rem auto;

  &:hover {
    transform: translateY(-5px);
    border: 3px solid rgb(14, 13, 13);
  }
`;

const RepoInfo = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const RepoDescription = styled(SmText)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.7);
`;

const UpdatedDate = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: rgb(105, 104, 104);
`;

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card key={repository.id}>
      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <H4>{repository.name}</H4>

        <RepoInfo>
          <SmText>
            <MdCode /> {repository.language || 'Unknown Language'}
          </SmText>
          <RepoDescription>
            {repository.description || 'No description available'}
          </RepoDescription>
        </RepoInfo>

        <SmButton>
          Open Repo <RotatedArrow size={18} />
        </SmButton>
        <UpdatedDate>
          {new Date(repository.updated_at).toLocaleDateString()}
        </UpdatedDate>
      </a>
    </Card>
  );
}
