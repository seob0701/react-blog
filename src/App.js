import "./App.css";
import { Route, Switch } from "react-router-dom";
import {
  Nav,
  Home,
  Diary,
  Notice,
  Login,
  Register,
  Contents,
  Write,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <div className="nav-box">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route path="/contents" component={Contents} />
        <Route exact path="/write" component={Write} />
      </Switch>
    </div>
  );
}

export default App;
