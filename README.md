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
- Turborepo

### 개발 도구
- ESLint
- Prettier
- TypeScript

## 🏗️ 모노레포 구조 및 빌드/테스트 관리

이 프로젝트는 **pnpm workspaces**와 **Turborepo**를 활용한 모노레포입니다.

### 폴더 구조

```
travel-table-hq-client/
├── apps/
│   └── client/         # 실제 서비스되는 프론트엔드 앱 (Vite + React)
├── packages/
│   └── ui/             # 공통 UI 컴포넌트 패키지 (shadcn/ui 기반)
├── package.json        # 루트 패키지 관리 및 터보 스크립트
├── turbo.json          # Turborepo 파이프라인 설정
├── pnpm-workspace.yaml # 워크스페이스 패키지 정의
└── ...
```

### 패키지 관리 도구

- **pnpm**: 워크스페이스 기반 멀티 패키지 관리
- **Turborepo**: 빌드/테스트/린트 파이프라인 관리 및 캐싱

### 빌드 및 테스트 관리

- 모든 패키지(apps, packages)는 자체적으로 `build`, `dev`, `lint`, `test` 스크립트를 가질 수 있습니다.
- 루트에서 `pnpm build`, `pnpm dev`, `pnpm lint`, `pnpm test` 등으로 전체 워크스페이스를 관리할 수 있습니다.
- 터보 캐시 및 의존성 기반 실행으로 빠른 작업이 가능합니다.



## 🎨 UI 라이브러리 (`packages/ui`)

이 프로젝트는 모노레포 내의 `packages/ui` 디렉토리에서 공유 UI 컴포넌트를 관리합니다. 모든 UI 컴포넌트는 [shadcn/ui](https://ui.shadcn.com/)를 기반으로 하며, 모든 애플리케이션(`apps/*`)에서 일관된 디자인 시스템을 제공하는 것을 목표로 합니다.

### 새로운 컴포넌트 추가하기

새로운 `shadcn/ui` 컴포넌트는 `packages/ui` 패키지에 추가해야 합니다.

1.  `packages/ui` 디렉토리로 이동합니다.
    ```bash
    cd packages/ui
    ```

2.  `shadcn` CLI를 사용하여 원하는 컴포넌트를 추가합니다.
    ```bash
    # 예시: Button 컴포넌트 추가
    pnpm dlx shadcn@latest add button
    ```

3.  추가된 컴포넌트를 다른 패키지에서 사용할 수 있도록 `packages/ui/src/index.ts` 파일에서 `export` 합니다.
    ```ts
    // packages/ui/src/index.ts
    export * from './lib/utils';
    export * from './components/ui/button'; // 새로 추가된 컴포넌트
    // ... 다른 컴포넌트들
    ```

### 애플리케이션에서 컴포넌트 사용하기

`apps/client`를 포함한 모든 애플리케이션에서는 `@tt/ui` 패키지를 통해 공유 컴포넌트를 가져와 사용할 수 있습니다.

```tsx
// 예: apps/client/src/pages/MyPage.tsx

import { Button, Card, CardHeader, CardTitle, CardContent } from '@tt/ui';

function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a shared button from our UI package.</p>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}

export default MyPage;
```

## 🔧 시작하기

### 필수 요구사항
- Node.js (최신 LTS 버전 권장)
- pnpm ( `npm install -g pnpm` 으로 설치)

### 설치 방법

1. 저장소 클론
```bash
git clone [https://github.com/TravelTableHQ/travel-table-hq-client.git]
cd travel-table-hq-client
```

2. 의존성 설치
```bash
pnpm install
```

### 개발 서버 실행

**클라이언트 앱 실행:**
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












