# My Portfolio 
방명록 작성이 가능한 Next.js 웹페이지입니다
# Getting Started
Vercel을 통해 배포중입니다. [링크](https://my-pf-dp.vercel.app/)
### Installation
```shell
$ git clone https://github.com/badmaniacs/my-pf.git
$ npm i
$ npm run dev
```
# Stacks
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"><img src="https://img.shields.io/badge/Chakraui-319795?style=for-the-badge&logo=Chakraui&logoColor=white">
# Project
📦components 
<br/>
 ┣ 📂layouts *레이아웃을 담당하는 컴포넌트 모음*
 <br/>
 ┃ ┣ 📜article.tsx
 <br/>
 ┃ ┗ 📜main.tsx
 <br/>
 ┣ 📜bio.tsx
 <br/>
 ┣ 📜commentview.tsx *게시물을 담당하는 컴포넌트*
 <br/>
 ┣ 📜fonts.tsx
 <br/>
 ┣ 📜grid-item.tsx
 <br/>
 ┣ 📜logo.tsx
 <br/>
 ┣ 📜myspinner.tsx *로딩 스피너*
<br/>
 ┣ 📜navbar.tsx
 <br/>
 ┣ 📜paragraph.tsx
 <br/>
 ┣ 📜section.tsx
 <br/>
 ┣ 📜theme-toggle-button.tsx
 <br/>
 ┣ 📜visitorsform.tsx *게시물 등록 폼*
 <br/>
 ┗ 📜work.tsx
 <br/>
 📦hooks
 <br/>
 ┗ 📜usePagination.ts *무한 스크롤과 게시글 로딩을 담당하는 Custom Hook*
 <br/>
 📦libs
 <br/>
 ┣ 📜axios.ts *axios 모듈*
 <br/>
 ┣ 📜firebase.ts *firebase 모듈*
 <br/>
 ┣ 📜theme.ts
 <br/>
 ┗ 📜type.ts *전역에서 사용할 type 모음*
 <br/>
 📦pages
  <br/>
 ┣ 📂api 
  <br/>
 ┃ ┗ 📜comment.ts *Next.js의 API Route를 활용한, 방명록 CRUD API*
  <br/>
 ┣ 📂works */Works/[...] 개별 페이지 모음*
  <br/>
 ┃ ┣ 📜toyprojects.tsx 
  <br/>
 ┃ ┣ 📜vcdex.tsx
  <br/>
 ┃ ┗ 📜weallriding.tsx
  <br/>
 ┣ 📜404.tsx
  <br/>
 ┣ 📜index.tsx *메인 페이지*
  <br/>
 ┣ 📜visitors.tsx *방명록 페이지*
  <br/>
 ┣ 📜works.tsx *Works 페이지*
  <br/>
 ┣ 📜_app.tsx
  <br/>
 ┗ 📜_document.tsx
  <br/>
