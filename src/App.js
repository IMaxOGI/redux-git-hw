import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Provider } from "react-redux";
import createStore from "./redux/createStore";
import Routes from "./Routes";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
