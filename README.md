# SKKUP MAP <img src="https://github.com/gunhee8178/opss_team8/blob/main/img/skku_s.png" width="50" height="50"></img>

## 프로젝트 소개

**성균관대학교 소프트웨어학과, 컴퓨터공학과 학생들을 위한 Campus Map 입니다.**

<div >
    <img src="https://github.com/gunhee8178/opss_team8/blob/main/img/thumbnail1.png" style="margin-right: 10px" ></img> 
    <img src="https://github.com/gunhee8178/opss_team8/blob/main/img/thumbnail2.png"></img> 
<div/>

    공강인데 마땅히 공부할 장소를 모르겠을 때
    조별과제 회의 장소가 마땅히 떠오르지 않을 때
    쉬고 싶은데 휴게 장소 위치를 모를 때 SKKU MAP을 사용해주세요.
   
   
### 기술 스택

<div>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
</div>

### 디렉토리 구조

```bash
// src directory structure
├── index.html
├── css
│   ├── style.css
│   ├── board.css
│   ├── space.css
│   ├── icon_right.svg
│   └── icon_pin_.svg
└── script
    ├── mainPage.js
    ├── function.js
    ├── building.js
    ├── time.js
    └── board.js

```

### 사용방법

#### 발표영상: https://youtu.be/__LdtIaBSUU

SKKU MAP은 Firebase를 Database로 사용하고 있습니다.

src 폴더에 key.json 파일을 생성하여 아래 내용을 입력해야합니다.

```javascript
firebaseConfig = {
  apiKey: "Your Firebase apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
};
```

<img src="https://github.com/gunhee8178/opss_team8/blob/main/img/screenshot.PNG"></img>

    건물별 / 기능별 / 시간별로 구분 되어있습니다.
    목적 / 장소 / 시간에 따라 필요한 장소를 찾아보세요.
    등록되어 있지 않은 장소는 메인페이지 게시판을 이용해 추가를 요청해 보세요.

## License

All of source codes under our project are using MIT License.

우수 프로젝트 시상 프로그램에 지원합니다
