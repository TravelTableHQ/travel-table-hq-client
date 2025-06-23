const Login = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>로그인</h2>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default Login
