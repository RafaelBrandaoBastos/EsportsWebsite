import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Container} from "./style";
import Home from "./Pages/Home/Home.jsx";
import LineUps from "./Pages/LineUps/LineUps.jsx";
import Eventos from "./Pages/Eventos/Eventos.jsx";
import Streamers from "./Pages/Streamers/Streamers.jsx";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/lineups" element={<LineUps/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/streamers" element={<Streamers/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
