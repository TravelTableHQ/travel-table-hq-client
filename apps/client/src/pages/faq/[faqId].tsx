import { useParams } from 'react-router-dom'

const FAQDetail = () => {
  const { faqId } = useParams<{ faqId: string }>()
  return (
    <div style={{ padding: '2rem' }}>
      <h2>FAQ 상세</h2>
      <p>FAQ ID: {faqId}</p>
    </div>
  )
}

export default FAQDetail
