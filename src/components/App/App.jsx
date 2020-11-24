import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import News from '../News/News';
import './common.scss';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/news"  component={News} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
