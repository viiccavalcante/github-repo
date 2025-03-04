import styled from 'styled-components'
import { User } from '../types/User'
import { SmButton, RotatedArrow, SmText } from './shared/GlobalStyle'

interface ProfileColumnProps {
  user?: User
  loadingUser: boolean
  errorUser?: string | null
}

const Column = styled.div`
  width: 300px;
  flex-shrink: 0;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid rgba(68, 67, 67, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1rem;
  }
`

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 1rem;
`

const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgb(14, 13, 13);
`

const Username = styled.h4`
  font-size: 1rem;
  font-weight: semibold;
  color: rgb(14, 13, 13);
  margin-bottom: 1rem;
`

export default function ProfileColumn({
  user,
  loadingUser,
  errorUser,
}: ProfileColumnProps) {
  return (
    <Column>
      <h2 style={{ color: 'rgb(14, 13, 13)' }}>GitHub Profile</h2>

      {loadingUser && <SmText>Loading...</SmText>}
      {errorUser && <SmText>{errorUser}</SmText>}

      {user && (
        <>
          {user.avatar_url && (
            <Avatar src={user.avatar_url} alt="User Avatar" />
          )}

          <Name>{user.name || 'No Name'}</Name>

          <Username>@{user.login}</Username>

          <SmText>{user.bio || 'No bio available.'}</SmText>

          <a href={user.html_url} target="_blank">
            <SmButton>
              Open Profile <RotatedArrow size={20} />
            </SmButton>
          </a>
        </>
      )}
    </Column>
  )
}
