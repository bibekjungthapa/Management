   import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Sidebar from './components/Sidebar';
    import Home from './pages/Home';
    import About from './pages/About';
    import DataTable from './pages/DataTable';
    import Student from './pages/student';
import { GlobalStateProvider } from './provider/GlobalStateContext';
import Products from './pages/Products';
    
    function App() {
      return (
        <GlobalStateProvider>
        <div style={{ display: 'flex' }}>
          <Sidebar />

          <div style={{ marginLeft: 200, padding: 20, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data" element={<DataTable />} />
              <Route path="/about" element={<About />} />
              <Route path='/arjun' element={<Student/>} />
              <Route path='/products' element={<Products/>} />
            </Routes>
          </div>
        </div>
        </GlobalStateProvider>
      );
    }
    
    export default App;


    
    
    
