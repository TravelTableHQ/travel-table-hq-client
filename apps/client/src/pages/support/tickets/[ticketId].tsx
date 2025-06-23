import { useParams } from 'react-router-dom'

const SupportTicket = () => {
  const { ticketId } = useParams<{ ticketId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>고객 지원 티켓</h2>
      <p>티켓 ID: {ticketId}</p>
    </div>
  )
}

export default SupportTicket
