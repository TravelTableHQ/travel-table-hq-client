const Signup = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>회원가입</h2>
      <form>
        <input
          type="text"
          placeholder="이메일"
          style={{ display: 'block', marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          style={{ display: 'block', marginBottom: 8 }}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default Signup
