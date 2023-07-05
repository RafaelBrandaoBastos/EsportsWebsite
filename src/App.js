import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Container} from "./style";
import Home from "./Pages/Home/Home.jsx";

import Eventos from "./Pages/Eventos/Eventos.jsx";


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>

          <Route path="/eventos" element={<Eventos/>}/>

        </Routes>
      </Router>
    </Container>
  );
}

export default App;
