import clsx from "clsx";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Card, Country, Search, Select, VirtualList } from "components";
import useStore from "state";
import { Link } from "react-router-dom";

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export function Home() {
  const [filtered, setFiltered] = useState("");
  const [searched, setSearched] = useState("");

  const countries = useStore(
    useCallback(
      (state) =>
        state.countries
          .filter(({ name }) => name.match(RegExp(`^${searched}`, "i")))
          .filter(({ region }) => region.match(RegExp(`^${filtered}`, "i"))),
      [searched, filtered]
    )
  );
  const getAllCountries = useStore((state) => state.getAllCountries);

  useEffect(() => {
    // get countries
    void getAllCountries();
  }, [getAllCountries]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { search, filter } = Object.fromEntries(
        new FormData(event.currentTarget).entries()
      );

      setSearched(String(search));

      setFiltered(Regions.includes(String(filter)) ? String(filter) : "");
    },
    [setFiltered, setSearched]
  );

  return (
    <form onChangeCapture={onChange}>
      <div className="flex flex-col md:flex-row md:h-14 gap-8 my-8 justify-between">
        <Card>
          <Search className="w-full lg:max-w-[32vw] py-2" />
        </Card>

        <Select
          classes={{ wrapper: "w-full sm:w-[20rem]" }}
          options={[
            { label: "Filter by Region", value: "Filter by Region" },
            ...Regions.map((label) => ({ label, value: label })),
          ]}
        />
      </div>
      <div className="hidden md:block">
        <ul
          className={clsx(
            "-mx-4 px-4 pb-4",
            "max-h-[68vh] overflow-auto",
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          )}
        >
          {countries.map((country) => (
            <li key={country.name}>
              <Link to={`/detail/${encodeURI(country.name)}`}>
                <Card>
                  <Country {...country} />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden">
        <VirtualList
          list={countries}
          classes={{
            wrapper: "max-h-[68vh] md:p-0 flex justify-center",
            list: "flex flex-col",
          }}
          rowHeight={336}
          visibleCount={2}
          gap={40}
        >
          {(country) => (
            <Link to={`/detail/${encodeURI(country.name)}`}>
              <Card>
                <Country {...country} />
              </Card>
            </Link>
          )}
        </VirtualList>
      </div>
    </form>
  );
}

export default Home;
