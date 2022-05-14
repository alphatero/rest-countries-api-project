import App from "@/App";
import { Router } from "@/App";
import { Detail } from "@/pages";
import { cleanup, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

afterEach(cleanup);

describe("renders lazy", () => {
  test("when it render will lazy import component", async () => {
    const { getByText } = render(<App />);

    const lazyElement = await waitFor(() => getByText(/search for a country/i));

    expect(lazyElement).toBeInTheDocument();
  });
});

test("render header", () => {
  const { getByText } = render(<App />);

  expect(getByText(/Where in the world/i)).toBeInTheDocument();
});

describe("render app", () => {
  test("full app router render in home page", async () => {
    const app = render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );

    expect(app.getByText(/Search for a country/i)).toBeInTheDocument();
  });
});

describe("render app dynamic path", () => {
  test.skip("full app router render with a country name to have country name's detail page", async () => {
    const countryName = "Taiwan";

    const { getByText } = render(
      <MemoryRouter initialEntries={[`detail/${countryName}`]}>
        <Routes>
          <Route path="/detail">
            <Route path=":countryName" element={<Detail />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(getByText(countryName)).toBeInTheDocument());
  });
});
