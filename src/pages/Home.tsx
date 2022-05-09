import { Card } from "components";
import { Country as TCountry } from "model";
import { useEffect } from "react";
import useStore from "state";

export function Home() {
  const countries: TCountry[] = useStore((state) => state.countries);

  useEffect(() => {
    // get countries
  }, []);

  console.log(countries);

  return (
    <form className="flex flex-col">
      <div>
        <Card>
          <div className="min-h-[22rem]">
            <figure className="h-40">
              <img src="https://flagcdn.com/w320/gm.png" alt="" />
            </figure>
            <div className="p-6 space-y-4">
              <h2 className="font-bold text-lg">contry</h2>

              <ul className="text-sm space-y-1">
                <li></li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
