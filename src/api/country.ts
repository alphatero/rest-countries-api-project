import { Country as TCountry } from "model";
import { always, identity, map, memoizeWith } from "ramda";
import { has, isString, isObject } from "utils";

const HOST = "https://restcountries.com/v3.1/";

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST));
}

function getNativeName(data: any): string[] {
  const results: string[] = [];

  if (!data) return results;

  for (const item of Object.values(data)) {
    if (
      item &&
      isObject(item) &&
      has("official", item) &&
      isString(item.official)
    ) {
      results.push(item.official);
    }
  }

  return results;
}

function getCurrencies(data: any): string[] {
  const results: string[] = [];

  if (!data) return results;

  for (const item of Object.values(data)) {
    if (isObject(item) && has("name", item) && isString(item.name)) {
      results.push(item.name);
    }
  }

  return results;
}

function get(endpoint: string): Promise<TCountry[]> {
  return (
    fetch(API(endpoint))
      .then((res) => res.json())
      //map T can accept two argument, first is from, second is return.
      .then(
        map<any, TCountry>((data) => ({
          name: data.name.common,
          nativeName: getNativeName(data.name?.nativeName),
          flag: data.flags.png,
          population: data.population,
          region: data.region,
          subRegion: data.subRegion,
          capital: data.capital || [],
          topLevelDomain: data.tld,
          currencies: getCurrencies(data.currencies),
          language: Object.values(data.language || []),
        }))
      )
  );
}

export const Country = {
  getAll: memoizeWith(always(""), () => get("all")),
  getByName: memoizeWith(identity, (name: string) => get(`name/${name}`)),
};
