import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "components";
import { Home, Detail } from "pages";

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen flex flex-col">
        <Header />

        <div className="p-4 container mx-auto flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/detail">
              <Route path=":countryName" element={<Detail />} />
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
