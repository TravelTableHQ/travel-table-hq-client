import { useParams } from 'react-router-dom'

const ItineraryDetail = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>여행 일정 상세</h2>
      <p>일정 ID: {itineraryId}</p>
    </div>
  )
}

export default ItineraryDetail
