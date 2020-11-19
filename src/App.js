// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import FifthComponent from './components/FifthComponent';


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>      
      <Router>
        <div className="App-header">
          <Header />

          <Route path="/first" component={FirstComponent}/>
          <Route path="/second" component={SecondComponent}/>
          <Route path="/third" component={ThirdComponent}/>
          <Route path="/fourth" component={FourthComponent}/>
          <Route path="/fifth" component={FifthComponent}/>

        </div>
      </Router>
    </>
  );
}

export default App;
