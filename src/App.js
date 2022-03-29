import Home from "./components/Home";
import About from "./components/About";
import Discover from "./components/Discover";
import NotFound from "./components/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import ExploreMore from "./components/ExploreMore";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={<Home />} />
      <Route path="/about" component={<About />} />
      <Route path="/discover" component={<Discover />} />
      <Route path="/explore" component={<ExploreMore />} />
      <Route path="*" component={<NotFound />} />
    </Switch>
  );
}

export default App;
