import WeatherApp from "./Components/WeatherPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Route, Switch } from "react-router-dom";
import WeatherCard from "./Components/WeatherCard";
import Error from "./Components/Error";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={WeatherApp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/weather" component={WeatherCard} />
        <Route exact path="/*" component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
