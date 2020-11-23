import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import PrivateRouter from './componetns/PrivateRouter/PrivateRouter'
// <PrivateRouter/>

import './App.css';
import Header from "./componetns/Header/Header";
import Footer from "./componetns/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Router>
                </Router>
            </Switch>
          <Footer/>
        </BrowserRouter>
    );
}

export default App;
