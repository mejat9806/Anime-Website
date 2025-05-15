import { Route, Routes } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import MainPage from './Page/MainPage/MainPage';
import { SingleAnimeDetailPage } from './Page/SingleAnimePage/SingleAnimeDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/anime/:animeID" element={<SingleAnimeDetailPage />} />
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
