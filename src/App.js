import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Container} from "./style";
import Home from "./Pages/Home/Home.jsx";
import LineUps from "./Pages/LineUps/LineUps.jsx";
import Eventos from "./Pages/Eventos/Eventos.jsx";
import Parceiros from "./Pages/Parceiros/Parceiros.jsx";
import Staff from "./Pages/Staff/Staff.jsx";


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/lineups" element={<LineUps/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/parceiros" element={<Parceiros/>}/>
          <Route path="/staff" element={<Staff/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
