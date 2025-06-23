import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  useIsMobile,
} from '@tt/ui'

const MobileHome = () => {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <div style={{ padding: 32, textAlign: 'center' }}>
        <h2>모바일 화면에서 확인해 주세요!</h2>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f9fafb',
      }}
    >
      {/* 상단 프로필/로고 */}
      <header
        style={{
          padding: '2rem 1rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Avatar>
          <AvatarImage src="/logo.png" alt="로고" />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Travel Table HQ</span>
      </header>

      {/* 인사말 카드 */}
      <Card style={{ margin: '0 1rem 1.5rem' }}>
        <CardHeader>
          <CardTitle>환영합니다!</CardTitle>
          <CardDescription>
            여행 일정 관리의 모든 것, 지금 시작해보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button style={{ width: '100%' }}>새 여행 만들기</Button>
        </CardContent>
      </Card>

      {/* 하단 탭 네비게이션 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Tabs defaultValue="home">
          <TabsList
            style={{
              width: '100%',
              justifyContent: 'space-around',
              position: 'fixed',
              bottom: 0,
              left: 0,
              background: '#fff',
              borderTop: '1px solid #eee',
              zIndex: 10,
            }}
          >
            <TabsTrigger value="home">홈</TabsTrigger>
            <TabsTrigger value="schedule">일정</TabsTrigger>
            <TabsTrigger value="profile">프로필</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
              <span role="img" aria-label="홈" style={{ fontSize: 32 }}>
                🏠
              </span>
              <div style={{ marginTop: 12, fontWeight: 500 }}>
                홈 탭입니다.
                <br />
                여행 소식과 추천 일정을 확인하세요!
              </div>
            </div>
          </TabsContent>
          <TabsContent value="schedule">
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
              <span role="img" aria-label="일정" style={{ fontSize: 32 }}>
                🗓️
              </span>
              <div style={{ marginTop: 12, fontWeight: 500 }}>
                일정 탭입니다.
                <br />내 여행 일정을 관리해보세요!
              </div>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
              <span role="img" aria-label="프로필" style={{ fontSize: 32 }}>
                👤
              </span>
              <div style={{ marginTop: 12, fontWeight: 500 }}>
                프로필 탭입니다.
                <br />내 정보와 설정을 확인하세요!
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MobileHome
