import './App.css';
import Header from './component/Header';
import Heart from './component/Heart';
import Message from './component/Message';
//ルーティング
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/heart" element={<Heart />} />
          <Route path="/message" element={<Message />} /> 
          <Route path="/*" element={<ToLogin />} /> 
        </Routes>
      </BrowserRouter>
        
    </div>
    
  );
}

//想定外のURLはリダイレクトさせる
function ToLogin() {
  
  return <Navigate to='/heart'/>;

}


export default App;