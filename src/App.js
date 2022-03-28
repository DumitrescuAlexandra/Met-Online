import classes from "./App.module.css";
import GetListOfArtItems from "./components/GetListOfArtItems";

function App() {
  return (
    <div className={classes.app}>
      <GetListOfArtItems />
    </div>
  );
}

export default App;
