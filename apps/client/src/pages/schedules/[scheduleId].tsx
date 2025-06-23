import { useParams } from 'react-router-dom'

const ScheduleDetail = () => {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>일정표 상세</h2>
      <p>일정표 ID: {scheduleId}</p>
    </div>
  )
}

export default ScheduleDetail
