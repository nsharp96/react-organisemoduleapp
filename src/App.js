import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Layout from './components/layouts/Layout';
import Contactus from './components/pages/Contactus';
import Signin from './components/pages/Signin';
import Pagenotfound from './components/pages/pagenotfound';

import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Layout>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>

      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
