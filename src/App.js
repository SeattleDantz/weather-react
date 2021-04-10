import "./App.css";
import Search from "./Search";
import SearchButton from "./SearchButton";
import CurrentLocation from "./CurrentLocation";
import UnitPicker from "./UnitPicker";
import TodaysWeather from "./TodaysWeather";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <Search />
        </div>
        <div className="col-2">
          <SearchButton />
        </div>
        <div className="col-2">
          <CurrentLocation />
        </div>
        <div className="col-2">
          <UnitPicker />
        </div>
      </div>
      <TodaysWeather />
    </div>
  );
}
