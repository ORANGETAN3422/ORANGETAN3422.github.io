import { MainListProvider } from "./context/MainListContext";
import MainSlideshow from "./components/MainSlideshow/MainSlideshow";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";

import './App.css';

function App() {
  return (
    <MainListProvider>
      <Background />
      <Header />
      <MainSlideshow />
    </MainListProvider>
  );
}

export default App;