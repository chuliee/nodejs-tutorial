# Node.js Web Application
## Node.js
Node.js는 템플릿(template) 개념을 활용해 웹 서버에 필요한 모든 웹 페이지를 정적 파일로 가지고 있지 않아도 여러 요청(request)에 대해 서로 다른 웹 페이지로 응답(response)할 수 있게 해주는 프레임워크이다. 2009년 Ryan Dahl에 의해 개발되었고 MIT License이다. 과거에는 수 많은 웹 페이지를 정적 파일로 작성해야 했지만, Node.js에서는 자바스크립트(JavaScript)를 활용해 필요한 웹 페이지를 자동으로 생성, 응답할 수 있다.

## URL
```
http://opentutorial.org:3000/main?id=HTML&page=12

  - http: protocol
  - opentutorial.org: host(domain)
  - 3000: port
  - main: path
  - id=HTML&page=12: query string
```

## CRUD
정보 시스템에서 가장 중요한 것은 CRUD, 특히 생성과 읽기를 이해하는 것이 중요하다.
- Create
- Read
- Update
- Delete

References:
- https://nodejs.org/docs/latest-v14.x/api/fs.html
- https://nodejs.org/en/docs/