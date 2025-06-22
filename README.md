# Travel Table HQ

여행 테이블 예약 및 관리 시스템

## 🚀 기술 스택

### 프론트엔드
- React 19.1.0
- TypeScript
- Vite 6.3.5
- React Router DOM 7.6.1

### 모노레포
- pnpm Workspaces

### 개발 도구
- ESLint
- Prettier
- TypeScript

## 📁 프로젝트 구조
```
travel-table-hq-client/
├── apps/
│   └── client/       # 클라이언트 애플리케이션 (Vite + React)
├── packages/         # 공유 라이브러리 (UI 컴포넌트, 유틸리티 등)
├── pnpm-workspace.yaml
└── package.json
```

## 🔧 시작하기

### 필수 요구사항
- Node.js (최신 LTS 버전 권장)
- pnpm ( `npm install -g pnpm` 으로 설치)

### 설치 방법

1. 저장소 클론
```bash
git clone [저장소 URL]
cd travel-table-hq-client
```

2. 의존성 설치
```bash
pnpm install
```

### 개발 서버 실행

**클라이언트 앱 실행:**
```bash
pnpm --filter travel-table-hq-client dev
```
또는, 루트 `package.json`에 정의된 스크립트를 사용할 수 있습니다:
```bash
pnpm dev
```

## 📝 사용 가능한 스크립트

- `pnpm dev`: 클라이언트 개발 서버 실행
- `pnpm build`: 클라이언트 프로덕션용 빌드
- `pnpm lint`: 클라이언트 코드 린트 검사

## 🔍 코드 컨벤션

- ESLint와 Prettier를 통한 코드 스타일 통일
- TypeScript를 사용한 정적 타입 검사












