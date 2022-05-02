import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './scss/main.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AnimalMemorize from './pages/animalMemorize/AnimalMemorizeList';
import AnimalQuiz from './pages/AnimalQuiz'
import AnimalInput from './pages/AnimalInput';
import NavbarFlag from './components/layout/NavbarFlag';
import { AnimalProvider } from './context/AnimalContext';


function App() {
  return (
    <AnimalProvider>
      <Router>
      <Navbar />

    <Routes>
      <Route path='/memorize' element={ <>     <NavbarFlag /><AnimalMemorize /></>} />
      <Route path='/quiz' element={<AnimalQuiz />} />
      <Route path='/input' element={<AnimalInput />} />
      <Route path='/quiz' element={<AnimalQuiz />} />
    </Routes>
      <Footer />
      </Router>
      <ToastContainer />
    </AnimalProvider>
  );
}

export default App;
