import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Menu from './pages/Menu';
import News from './pages/News';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuDetail from './pages/MenuDetail';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menuDetail" element={<MenuDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetail" element={<NewsDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
