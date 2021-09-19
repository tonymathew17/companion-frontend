import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import ScrollToTop from "./components/common/ScrollToTop";
import Faq from "./components/pages/faq/faqWrapper";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/faq' component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
