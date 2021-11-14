import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Create from './components/Create/Create'
import Allposts from './components/Allposts/Allposts'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App d-flex" style={{height: '100vh'}}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/allposts" element={<Allposts />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
