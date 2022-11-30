import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WikiMovies from "./WikiMovies/WikiMovies";
import SnuggsCommerce from "./SnuggsCommerce/SnuggsCommerce";
import BurgerBuilder from "./BurgerBuilder/BugerBuilder";
import SlackClone from "./SlackClone/SlackClone";
import Natours from "./Natours/Natours";
import Nexter from "./Nexter/Nexter";
import Trillo from "./Trillo/Trillo";
import OldPortfolio from "./OldPortfolio/OldPortfolio";
import SpotifyMimic from "./SpotifyMimic/SpotifyMimic";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Homepage/Navbar";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/wiki-movies" element={<WikiMovies />} />
          <Route path="/snuggs-commerce" element={<SnuggsCommerce />} />
          <Route path="/burger-builder" element={<BurgerBuilder />} />
          <Route path="/slack-clone" element={<SlackClone />} />
          <Route path="/natours" element={<Natours />} />
          <Route path="/nexter" element={<Nexter />} />
          <Route path="/trillo" element={<Trillo />} />
          <Route path="/old-portfolio" element={<OldPortfolio />} />
          <Route path="/spotify-mimic" element={<SpotifyMimic />} />
        </Routes>
      </Router>
      <ScrollButton />
    </>
  );
}

export default App;
