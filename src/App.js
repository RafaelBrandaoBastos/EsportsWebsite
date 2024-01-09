import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "./style";
import Home from "./Pages/Home/Home.jsx";
import LineUps from "./Pages/LineUps/LineUps.jsx";
import Eventos from "./Pages/Eventos/Eventos.jsx";
import Parceiros from "./Pages/Parceiros/Parceiros.jsx";
import Staff from "./Pages/Staff/Staff.jsx";
import Shirt from "./Pages/Shirt/Shirt.jsx";
import { LanguageProvider } from "./contexts/LanguageProvider.jsx";

function App() {
  return (
    <LanguageProvider>
      <Container>
        <Router>
          <Routes>
            <Route exact path="/camisas/en" element={<Shirt />} />
            <Route exact path="/camisas/es" element={<Shirt />} />
            <Route exact path="/camisas" element={<Shirt />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/en" element={<Home />} />
            <Route exact path="/es" element={<Home />} />
            <Route exact path="/lineups" element={<LineUps />} />
            <Route exact path="/lineups/en" element={<LineUps />} />
            <Route exact path="/lineups/es" element={<LineUps />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/en" element={<Eventos />} />
            <Route path="/eventos/es" element={<Eventos />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/parceiros/en" element={<Parceiros />} />
            <Route path="/parceiros/es" element={<Parceiros />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/en" element={<Staff />} />
            <Route path="/staff/es" element={<Staff />} />
          </Routes>
        </Router>
      </Container>
    </LanguageProvider>
  );
}

export default App;
