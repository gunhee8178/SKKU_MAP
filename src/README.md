## DataBase

SKKU MAP은 **Firebase**를 Database로 사용하고 있습니다.

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

#### Firebase DataBase 구조

##### Space
```jsonc 
    
    페이지에 표시되는 장소들의 정보를 가지고 있습니다.

    index : {
        name :          "장소명",
        location :      "소속 건물",
        floor :         "층",
        purpose :       "사용목적",
        reservation :   "예약 필요 여부",
        img :           "image URL",
        semester_time : "학기중 운영시간",
        atmosphere :    "분위기",
        etc :           "특징",
        url :           "URL"        
    }
```

##### message
```jsonc 

    게시판의 글 정보를 담고 있습니다.
    messageKey는 글을 작성하면 자동 할당 됩니다.
    
    messageKey : {
        id :        "아이디",
        password :  "비밀번호",
        message :   "메세지 내용"        
    }
```

