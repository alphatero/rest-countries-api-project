import { URL } from "../base";
import { HOST } from "../country";

describe("func URL", () => {
  const fields = {
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
  };

  test("input a fetch data url, return string", () => {
    expect(URL(`${HOST}all`, fields)).toBe(
      "https://restcountries.com/v3.1/all?fields=name%2Cflags%2Cpopulation%2Ccapital%2Cregion%2Ctld%2Csubregion%2Clanguages%2Ccurrencies"
    );
  });
});
