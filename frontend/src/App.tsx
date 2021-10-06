import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from './elements/pages/MainPage';
import ContactPage from './elements/pages/ContactPage';
import Footer from './elements/components/Footer';
import FoodTraitor from './elements/pages/FoodTraitor';

export const settingContext = React.createContext({
  language: "fr",
  setLanguage:((lang:string)=>{}) as Function,
});

function App() {
  const [lang, setLang] = React.useState("fr" as "fr" | "en");
  return (
    <Router >
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <ContactPage lang={lang} setLang={setLang}/>
          </Route>
          <Route path="/foodtraitor">
            <FoodTraitor lang={lang} setLang={setLang}/>
          </Route>
          <Route path="/">
            <MainPage lang={lang} setLang={setLang}/>
          </Route>

        </Switch>
        <Footer lang={lang} />
        </div>
    </Router>
  );
}

export default App;
