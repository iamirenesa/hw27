import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="App_wrapper">
            <Navigation></Navigation>
            <Main></Main>
        </div>
    </div>
  );
}

export default App;
