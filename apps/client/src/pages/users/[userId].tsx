import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>사용자 프로필</h2>
      <p>사용자 ID: {userId}</p>
    </div>
  )
}

export default UserProfile
