import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Blog from './views/blog';
import Shop from './views/Shop';
import Contact from './views/Contact'

function App() {
  return (
    <Router>
      <Header />

      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
