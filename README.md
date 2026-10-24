# Next.js 스타터킷

웹 개발을 빠르게 시작할 수 있는 스타터킷입니다.

## 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router, Turbopack), React 19 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 (`tailwind.config` 없음, `@tailwindcss/postcss`) |
| UI | shadcn/ui (base-nova 프리셋), lucide-react |
| 상태 관리 | Zustand |
| 폼 | React Hook Form + Zod |
| 테마 | next-themes (라이트/다크/시스템) |

## 시작하기

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |

## 폴더 구조

```
app/                  # 라우트 (랜딩, /examples, 404, 에러, 로딩)
components/
  ui/                 # shadcn/ui 컴포넌트 (CLI로 생성)
  layout/             # 헤더, 푸터, 모바일 메뉴
  examples/           # 폼, 카운터 예제
config/site.ts        # 사이트 이름, 설명, 메뉴
lib/validations/      # Zod 스키마
stores/               # Zustand 스토어
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>
```

이 프로젝트의 shadcn/ui는 Base UI 기반이므로 `asChild` 대신 `render` prop을 사용합니다.
폼은 기존 `Form` 대신 최신 가이드의 `Field` 컴포넌트와 React Hook Form `Controller`를 사용합니다.
