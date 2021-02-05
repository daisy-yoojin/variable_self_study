* src/components: 컴포넌트들이 위치하는 디렉토리입니다.
* src/pages: 각 라우트들이 위치하는 디렉토리 입니다.
* src/client: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다.
* src/server: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다.
* src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다.
* src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다.


/////////// NODE_ENV설정
코드들을 불러올 때 ‘../components/Something’ 이런식으로 불러와야 하는 코드를 ‘components/Something’ 이렇게 불러 올 수 있도록 프로젝트의 루트경로를 설정
- package.json의 script 설정
 "scripts": {
    "start": "cross-env NODE_PATH=src react-scripts start",
    "build": "cross-env NODE_PATH=src react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }