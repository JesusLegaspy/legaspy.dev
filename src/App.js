import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Candy from './projects/candy/Candy';
import Home from './projects/home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="candy" element={<Candy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}