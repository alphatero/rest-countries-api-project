import clsx from "clsx";
import { Country as TCountry } from "model";
import { Data } from "components";
import { Format } from "utils";

type CountryProps = TCountry & {
  className?: string;
};

export function Country({
  className,
  name,
  flag,
  population,
  region,
  capital,
}: CountryProps) {
  return (
    <div className={clsx("min-h-[22rem]", className)}>
      <figure className="h-40">
        <img src={flag} alt={`${name}'s flag`} />
      </figure>

      <div className="p-6 space-y-4">
        <h2 className="font-bold text-lg">{name}</h2>

        <ul className="text-sm space-y-1">
          {Object.entries({
            Population: Format.number(population),
            Region: region,
            Capital: capital.join(", "),
          }).map(([title, value]) => (
            <li key={title}>
              <Data title={title} value={value} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
