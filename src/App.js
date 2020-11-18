import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Home,Diary, Notice, Shop, Login, Register} from './components/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/diary" component={Diary}/>
        <Route exact path="/notice" component={Notice}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/signup" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
