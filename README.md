# IoTrust Discovery - 디센트 모바일 앱

> IoTrust 프론트엔드 개발자 실기 과제

## 📌 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [프로젝트 실행 및 빌드](#프로젝트-실행-및-빌드)
- [구현한 주요 요소](#구현한-주요-요소)
- [개발 과정에서의 고민과 의사결정](#개발-과정에서의-고민과-의사결정)
- [제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점](#제한-시간-내-구현하지-못한-부분--보완하고-싶은-점)

---

## 프로젝트 소개

디센트(D'CENT) 모바일 앱의 Discovery 메인 화면을 구현한 프로젝트입니다.

### 주요 기능

- 🎯 **배너 슬라이더**: 자동 재생 + 페이지네이션 + CTA 버튼
- ⭐ **즐겨찾기 관리**: 삭제 기능 + 낙관적 업데이트(취소) + 에러 핸들링
- 📋 **서비스 리스트**: 가상 스크롤링 + 무한 스크롤 + 검색 + 필터링
- 🌐 **다국어 지원**: 한국어/영어 (Context API 기반)
- 🖼️ **이미지 최적화**: Lazy Loading + WebP fallback
- ⚡ **성능 최적화**: React.memo, useMemo, useCallback, 가상 스크롤링

---

## 기술 스택

### Core

- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.2.2** - 빌드 도구

### 상태 관리

- **TanStack Query 5.90.9** - 서버 상태 관리 (데이터 페칭, 캐싱, Suspense)
- **Context API** - 전역 상태 관리 (언어, 플랫폼)
- **useState** - 지역 상태 관리 (모달, 검색어 등)

### UI/UX

- **Swiper 12.0.3** - 배너 슬라이더
- **@tanstack/react-virtual 3.13.12** - 가상 스크롤링
- **react-error-boundary 6.0.0** - 에러 바운더리

---

## 프로젝트 실행 및 빌드

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
# Development 환경 (Mock 데이터)
pnpm dev

# Staging 환경
pnpm dev:stage

# Production 환경
pnpm dev:prod
```

### 빌드

```bash
# Production 빌드
pnpm build

# Development 빌드
pnpm build:dev

# Staging 빌드
pnpm build:stage
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일들이 있습니다:

- `.env.development` - 개발 환경 (Mock 데이터 사용)
- `.env.staging` - 스테이징 환경
- `.env.production` - 프로덕션 환경

---

## 구현한 주요 요소

### ✅ 필수 구현 사항

#### 1. 배너 슬라이더

- 자동 재생 (3초) + Fraction 페이지네이션
- CTA 버튼 및 외부 URL 이동
- 스켈레톤 UI

#### 2. 즐겨찾기 리스트

- 가로 스크롤 카드 리스트
- 삭제 기능 (확인 다이얼로그 + TanStack Query Mutation)
- 캐시 업데이트로 즉시 UI 반영
- 성공/실패 토스트 메시지

#### 3. 서비스 리스트

- **가상 스크롤링** (@tanstack/react-virtual) - 1000개+ 아이템 성능 최적화
- **무한 스크롤** (TanStack Query Infinite Query)
- **서버 사이드 검색** (디바운스 300ms, 상단 고정)
- **필터링** (언어/플랫폼/환경별)
- 상세 바텀시트 모달
- 스켈레톤 UI + 빈 상태 UI

#### 4. 이미지 최적화

- Lazy Loading (`loading="lazy"`)
- WebP 우선 지원 + PNG/JPG fallback (`onError` 핸들러)

#### 5. 다국어 지원

- Context API + `<LocalizedText />` 컴포넌트
- TypeScript 타입 안정성
- 쿼리 파라미터(`?lang=en`)로 언어 전환

#### 6. 환경별 설정

- `.env` 파일로 dev/stage/prod 구분
- 환경별 빌드 스크립트 및 API base URL
- dev: Mock 데이터 / stage, prod: 실제 API

---

## 개발 과정에서의 고민과 의사결정

### 1. 검색 기능 구현 여부

**고민:**

- 과제 문서 상단: "헤더(아이콘 및 검색창)은 구현 대상이 아니에요"
- 과제 문서 하단: "서비스 리스트 검색 및 필터링" 구현 요구사항 존재

**결정:** 검색 기능 구현

- 하단의 구체적인 요구사항을 따름
- 상단 고정 검색바로 구현하여 사용자 경험 개선
- 서버 사이드 검색 + 디바운스(300ms)로 성능 최적화

### 2. 가상 스크롤 라이브러리 선택

**시도한 라이브러리:**

- ❌ `react-window`: 버전별 API 불일치, TypeScript 타입 이슈
- ✅ `@tanstack/react-virtual`: TanStack Query와 궁합이 좋고, API가 직관적

**결정:** `@tanstack/react-virtual` 채택

- TanStack Query와 같은 생태계
- 무한 스크롤과 자연스러운 통합
- 컨테이너 스크롤링 지원

---

## 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점

### 가상 스크롤링 전체 스크롤 적용

**현재 구현:**

- 서비스 리스트에 고정 높이(`height: 500px`) + 내부 스크롤 적용
- 가상 스크롤링이 컨테이너 내부에서만 동작

**시도한 방법:**

- `@tanstack/react-virtual`의 `window` 스크롤 모드 시도
- 데이터가 렌더링되지 않는 문제 발생

**어려웠던 점:**

- 가상 스크롤링을 전체 페이지 스크롤에 적용하는 것이 기술적으로 복잡함
- 시간 제약으로 인해 안정적인 부분 스크롤 방식 채택

**개선 방향:**

- `IntersectionObserver`를 활용한 커스텀 가상 스크롤 구현
- 또는 다른 가상 스크롤 라이브러리 탐색

---

## AI 도구 사용

### 사용한 도구

**Cursor AI (Claude Sonnet 4.5)** - 전체 개발 과정에서 페어 프로그래밍 방식으로 활용

### 주요 활용 사례

- ⚡ 초기 프로젝트 구조 설계 및 폴더 구성
- 🔍 실시간 에러 디버깅 및 라이브러리 대안 제안
- 📚 모범 사례(Best Practice) 적용
- 🎯 TypeScript 타입 안정성 검증 및 리팩토링
- 📝 README 문서 작성
