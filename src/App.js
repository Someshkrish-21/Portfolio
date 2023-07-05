import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Introduction from './Introduction'
import Skill from './Skill';
import Contact from './Contact';
import About from './About';
import Nopage from './Nopage';
import Footer from './Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Introduction/>} />
        <Route path={'/Skill'} element={<Skill/>} />
        <Route path={'/Contact'} element={<Contact/>} />
        <Route path={'/About'} element={<About/>} />
        <Route path={'*'} element={<Nopage/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
