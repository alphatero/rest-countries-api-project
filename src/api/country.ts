import { Country as TCountry } from "model";

async function get(): Promise<TCountry[]> {
  return [
    {
      name: "",
      nativeName: [],

      flag: "",
      population: 0,

      region: "",
      subRegion: "",

      capital: [],

      topLevelDomain: [],
      currencies: [],

      language: [],
    },
  ];
}

export const Country = {
  get,
};
