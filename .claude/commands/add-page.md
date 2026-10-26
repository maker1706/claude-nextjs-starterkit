---
description: 새 페이지 컴포넌트 생성
argument-hint: <경로> [페이지 설명]
---

새 페이지를 생성합니다. 인자: $ARGUMENTS

## 사전 확인

1. `node_modules/next/dist/docs/01-app`의 관련 가이드를 확인합니다 (Next.js 16, `cacheComponents` 활성화 상태).
2. `app/page.tsx`, `app/examples/page.tsx`를 참고해 기존 페이지 구조와 스타일을 파악합니다.
3. 인자에서 라우트 경로(예: `about`, `blog/posts`)와 설명을 추출합니다. 경로가 없으면 사용자에게 질문합니다.

## 생성 규칙

- `app/<경로>/page.tsx`를 생성합니다 (기본은 서버 컴포넌트, 필요한 경우에만 `"use client"`).
- 페이지 props 타입은 전역 헬퍼를 사용합니다 (예: `PageProps<"/about">`).
- 재사용 가능한 UI는 `components/` 하위에 kebab-case 파일명으로 분리합니다.
- UI는 shadcn/ui(base-nova, `render` prop 사용)와 Tailwind CSS v4를 사용하며, 필요한 컴포넌트는 `npx shadcn@latest add <이름>`으로 추가합니다.
- 폼은 `Field`/`FieldGroup`/`FieldLabel`/`FieldError` + React Hook Form `Controller` + Zod 조합을 사용하고, 스키마는 `lib/validations/`에 둡니다.
- `any` 타입 금지, 반응형 필수, 들여쓰기 2칸.
- 코드 주석은 한국어, 변수/함수명은 영어로 작성합니다.
- 페이지별 `metadata`를 `export const metadata`로 정의합니다.
- 네비게이션에 노출해야 하면 `config/site.ts`의 `navItems`에 추가합니다.

## 마무리

- `npm run lint`로 검증하고 오류를 수정합니다.
- 생성한 파일 목록과 접속 경로(`http://localhost:3000/<경로>`)를 한국어로 요약합니다.
