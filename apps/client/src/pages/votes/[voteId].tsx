import { useParams } from 'react-router-dom'

const VoteDetail = () => {
  const { voteId } = useParams<{ voteId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>투표 상세</h2>
      <p>투표 ID: {voteId}</p>
    </div>
  )
}

export default VoteDetail
