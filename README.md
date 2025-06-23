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

## ⚙️ 개발 환경 및 코드 품질 관리

이 프로젝트는 여러 개발자가 일관된 코드 스타일을 유지하고 높은 품질의 코드를 생산할 수 있도록 다양한 도구를 도입하여 대부분의 과정을 자동화했습니다.

### **1. ESLint (코드 문법 및 스타일 검사)**

-   **중앙 관리**: 프로젝트의 가장 바깥(루트)에 위치한 `eslint.config.js` 파일 하나로 모노레포 내의 모든 패키지(`apps/*`, `packages/*`)의 코드 스타일과 문법 규칙을 중앙에서 관리합니다.
-   **주요 규칙**: TypeScript, React, Prettier와의 충돌 방지, `import` 순서 자동 정렬 등의 규칙이 기본으로 적용됩니다.

### **2. Prettier (코드 포맷팅)**

-   **포맷 통일**: 루트의 `.prettierrc` 파일에 정의된 규칙에 따라 모든 코드의 포맷(들여쓰기, 따옴표, 세미콜론 등)을 통일합니다.

### **3. Husky & lint-staged (커밋 전 자동화)**

-   **품질 강제**: 개발자가 `git commit`을 실행하면, `husky`가 커밋 직전에 `lint-staged`를 자동으로 실행시킵니다.
-   **빠른 검사**: `lint-staged`는 전체 프로젝트가 아닌, 커밋을 위해 스테이징(`git add`)된 파일만을 대상으로 ESLint와 Prettier를 실행하므로 매우 빠릅니다.
-   **자동 수정 및 커밋**: 검사 과정에서 발견된 포맷 오류나 간단한 문법 오류는 자동으로 수정되며, 수정된 내용은 원래의 커밋에 함께 포함됩니다. 이 과정을 통해 모든 커밋이 정해진 코드 품질 표준을 만족하도록 보장합니다.

### **4. Turborepo (빌드 시스템 및 태스크 러너)**

-   **효율적인 태스크 실행**: `build`, `dev`, `lint` 같은 반복적인 작업을 효율적으로 관리합니다. `turbo.json`의 `tasks` 필드에 각 작업의 의존성과 캐싱 정책이 정의되어 있습니다.
-   **강력한 캐싱**: 한 번 실행했던 빌드나 테스트 결과는 캐싱됩니다. 코드에 변경이 없는 부분은 다시 작업하지 않고 캐시된 결과를 사용하므로, 반복 작업 시 매우 빠른 속도를 경험할 수 있습니다.

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












