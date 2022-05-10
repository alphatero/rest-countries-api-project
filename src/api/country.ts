import { Country as TCountry } from "model";
import { always, identity, map, memoizeWith } from "ramda";
import { has, isString, isObject } from "utils";
import { toJSON, URL } from "./base";

const API = (endpoint: string) =>
  URL(`https://restcountries.com/v3.1/${endpoint}`, {
    fields: [
      "name",
      "flags",
      "population",
      "capital",
      "region",
      "tld",
      "subregion",
      "languages",
      "currencies",
    ],
  });

function getNativeName(data: any): string[] {
  const results: string[] = [];

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

  for (const item of Object.values(data)) {
    if (isObject(item) && has("name", item) && isString(item.name)) {
      results.push(item.name);
    }
  }

  return results;
}

function get(url: string) {
  return (
    fetch(API(url))
      .then(toJSON)
      //map T can accept two argument, first is from, second is return.
      .then(
        map<any, TCountry>((data) => ({
          name: data.name.common,
          nativeName: getNativeName(data.name.nativeName),
          flag: data.flags.png,
          population: data.population,
          region: data.region,
          subRegion: data.subRegion,
          capital: data.capital,
          topLevelDomain: data.tld,
          currencies: getCurrencies(data.currencies),
          languages: Object.values(data.languages),
        }))
      )
  );
}

export const Country = {
  getAll: memoizeWith(always(""), () => get("all")),
  getByName: memoizeWith(identity, (name: string) => get(`name/${name}`)),
  getBySubRegion: memoizeWith(identity, (subregion: string) =>
    get(`subregion/${subregion}`)
  ),
};
