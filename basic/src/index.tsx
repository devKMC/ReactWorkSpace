import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// starter 설치 이후:
// 1. src 폴더 파일 정리 - App.css / App.tsx() / index.css / index.tsx(jsx) / react-app-env.d.ts(js) 만 남기고 삭제
// 2. App.tsx(jsx)에서 import './App.css' / 'import React from 'react' 만 남기고 import 제거
// 3. App.tsx(jsx)에서 return에 있는 요소를 제거하고 <div></div>만 작성
// 4. App.css에서 코드 전부 삭제 (파일 삭제가 아니라 코드 삭제)
// 5. index.tsx(jsx)에서 import reportWebVitals from './reportWebVitals' 삭제
// 6. index.tsx(jsx)에서 주석이 달려있는 (if~~)코드를 삭제
// 7. index.css에서 code 태그(문장) 스타일 제거 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
