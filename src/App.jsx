import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (

    <Router>
      
   <main>
    <Header />
   <ScrollToTop/>
    <Routes>
    <Route path='/' element= {<Home />}/>
    <Route path='/moviedetails/:imdbID' element= {<MovieDetails />}/>
    </Routes>
    <Footer/>
   </main>
    </Router>
  );
}

export default App;
