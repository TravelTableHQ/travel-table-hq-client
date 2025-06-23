import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@tt/ui'

const Home = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>홈</SidebarMenuButton>
            </SidebarMenuItem>
            {/* 추가 메뉴 아이템은 필요에 따라 여기에 */}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main style={{ padding: '1rem' }}>
        <h1>Travel Table HQ</h1>
        <p>여행 일정 관리의 모든 것!</p>
      </main>
    </SidebarProvider>
  )
}

export default Home
