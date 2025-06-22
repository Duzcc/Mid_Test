import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Product from './components/Product';
import Content from './components/Content';
import { movies } from './data';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  return (
      <div className="min-h-screen bg-black text-white">
      <Header />
        {/* Truyền phim đang chọn vào Content */}
        <Content movie={selectedMovie} />
        {/* Truyền danh sách phim và hàm đổi phim vào Product */}
        <Product movies={movies} onSelect={setSelectedMovie} />
    </div>
  );
}

export default App