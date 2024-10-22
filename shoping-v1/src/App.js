
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import News from './Pages/News';

function App() {
  return (
    <>
      
      <Navigation />
      <h1> use above Navigation to move different pages</h1>
      {/* set of rules */}
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/news' element={ <News/> } />
          </Routes>
      </BrowserRouter>
    </>
  );
}
// custom error page
/* button */

export default App;
