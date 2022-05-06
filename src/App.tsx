import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "components";
import { Home } from "pages";

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen flex flex-col">
        <Header />

        <div className="p-4 container mx-auto flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
