import './App.css';

import { Route, Routes } from 'react-router-dom'

import { Layout } from './component'
import { BookingPage, Home } from './pages'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
