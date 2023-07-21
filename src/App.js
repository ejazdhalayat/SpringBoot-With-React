
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import ListEmployee from './components/ListEmployee';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className='container'>
          <Routes>
            <Route exact path='/' Component={ListEmployee}></Route>
            <Route path='/employees' Component={ListEmployee}></Route>
          </Routes>
           
            
      </div>
      <FooterComponent />
      </Router>
     
    </div>
  );
}

export default App;
