export const ROUTES = {
  // 기본 경로
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',

  // 여행 일정
  ITINERARIES: '/itineraries',
  ITINERARY_DETAIL: (itineraryId: string) => `/itineraries/${itineraryId}`,

  // 투표
  VOTES: '/votes',
  VOTE_DETAIL: (voteId: string) => `/votes/${voteId}`,

  // 일정표
  SCHEDULES: '/schedules',
  SCHEDULE_DETAIL: (scheduleId: string) => `/schedules/${scheduleId}`,

  // 설정
  SETTINGS: '/settings',
  // 사용자
  USER_PROFILE: (userId: string) => `/users/${userId}`,
  // 기타
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',

  //공지사항
  NOTICE: '/notice',
  NOTICE_DETAIL: (noticeId: string) => `/notice/${noticeId}`,

  // FAQ
  FAQ: '/faq',
  FAQ_DETAIL: (faqId: string) => `/faq/${faqId}`,

  // 서비스 약관
  TERMS_OF_SERVICE: '/terms-of-service',
  PRIVACY_POLICY: '/privacy-policy',

  // 고객 지원
  SUPPORT: '/support',
  SUPPORT_TICKET: (ticketId: string) => `/support/tickets/${ticketId}`,
}
