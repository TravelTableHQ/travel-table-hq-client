import { useParams } from 'react-router-dom'

const NoticeDetail = () => {
  const { noticeId } = useParams<{ noticeId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>공지사항 상세</h2>
      <p>공지 ID: {noticeId}</p>
    </div>
  )
}

export default NoticeDetail
