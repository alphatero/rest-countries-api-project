import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen flex flex-col">
        <Header />
      </main>
    </BrowserRouter>
  );
}

export default App;
