import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Layout from "./components/layout/Layout";
import Projects from "./components/Pages/Projects";
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
