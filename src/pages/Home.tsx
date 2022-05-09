import clsx from "clsx";
import { useEffect } from "react";
import { Card, Country } from "components";
import { Country as TCountry } from "model";
import useStore from "state";

export function Home() {
  const countries: TCountry[] = useStore((state) => state.countries);
  const getAllCountries = useStore((state) => state.getAllCountries);

  useEffect(() => {
    // get countries
    getAllCountries();
  }, [getAllCountries]);

  console.log(countries);

  return (
    <form>
      <div className="flex flex-col md:flex-row md:h-14 gap-8 my-8 justify-between"></div>
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
              <Card>
                <Country {...country} />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
