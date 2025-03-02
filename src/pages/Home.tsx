import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ searchText: string }>();

  const onSubmit = (data: { searchText: string }) => {
    const username = data.searchText.trim();
    if (data.searchText.trim()) {
      navigate(`/profile/${username}`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('searchText')} placeholder="Github username" />
        </div>
        <button type="submit">Find User</button>
        <a href='#'> About me </a>
      </form>
    </div>
  )
}
