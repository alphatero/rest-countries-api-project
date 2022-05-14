import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "components";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Detail = lazy(() => import("@/pages/Detail"));

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/detail">
        <Route path=":countryName" element={<Detail />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen flex flex-col">
        <Header />

        <div className="p-4 container mx-auto flex-1">
          <Suspense fallback={<h2>loadingin</h2>}>
            <Router />
          </Suspense>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
