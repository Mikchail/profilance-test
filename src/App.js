import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import PrivateRouter from './componetns/PrivateRouter/PrivateRouter'
// <PrivateRouter/>

import './App.css';
import Header from './componetns/Header/Header';
import Footer from './componetns/Footer/Footer';
import Main from './componetns/Main/Main';
import News from './componetns/News/News';
import Login from './componetns/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/news"  component={News} />
        <Route path="/login"  component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
