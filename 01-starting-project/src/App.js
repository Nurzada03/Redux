import Calculator from "./components/Counter";
import { store } from "./store";
import { Provider } from "react-redux";
import Auth from "./components/Auth";
import Header from "./components/Header";
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Calculator />
      <Auth/>
      

    </Provider>
  );
}

export default App;
