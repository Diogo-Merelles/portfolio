import Layout from './components/Layout';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
          <Route element={<Sidebar />}>
          

          </Route>

        </Route>
    </Routes>
    </>
  );
}

export default App;
