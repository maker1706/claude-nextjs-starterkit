---
description: 새 React 함수형 컴포넌트 파일 생성
argument-hint: <컴포넌트 이름 (예: user-card 또는 UserCard)>
---

새 컴포넌트를 생성합니다. 컴포넌트 이름: $1

## 절차

1. `$1`이 비어 있으면 사용자에게 컴포넌트 이름을 질문합니다.
2. 이름을 변환합니다.
   - 파일명: kebab-case (예: `UserCard` → `user-card.tsx`)
   - 컴포넌트명: PascalCase (예: `user-card` → `UserCard`)
3. `components/<파일명>.tsx`를 생성합니다. 같은 파일이 이미 있으면 덮어쓰지 말고 사용자에게 알립니다.
   - 이 프로젝트에는 `src/` 폴더가 없고 `@/*` 별칭이 프로젝트 루트를 가리키므로 `components/`에 생성합니다.
4. 아래 템플릿으로 작성합니다.

```tsx
import { cn } from "@/lib/utils";

interface UserCardProps {
  className?: string;
  children?: React.ReactNode;
}

// 컴포넌트 설명
export function UserCard({ className, children }: UserCardProps) {
  return <div className={cn("w-full", className)}>{children}</div>;
}
```

## 규칙

- React 함수형 컴포넌트와 TypeScript를 사용하며 `any` 타입은 금지합니다.
- 스타일은 Tailwind CSS 클래스로 작성하고, 반응형(`sm:`, `md:`, `lg:`)을 고려합니다.
- props 타입은 `interface <컴포넌트명>Props`로 정의하고 `className`을 받아 `cn()`으로 병합합니다.
- 기본은 서버 컴포넌트이며, 상태·이벤트 핸들러·브라우저 API가 필요할 때만 파일 최상단에 `"use client"`를 추가합니다.
- 들여쓰기 2칸, 주석은 한국어로 작성합니다.
- `cn` 유틸이 `lib/utils.ts`에 없으면 import 대신 템플릿에서 `cn`을 제거합니다.

## 마무리

- 생성한 파일 경로와 import 예시(`import { UserCard } from "@/components/user-card"`)를 한국어로 안내합니다.
