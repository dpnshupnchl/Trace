
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Get from './components/Get';
import Post from './components/Post';
import Put from './components/Put';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/fetch' element={<Get />}></Route>
      <Route path='/post' element={<Post />}></Route>
      <Route path='/put' element={<Put />}></Route>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
