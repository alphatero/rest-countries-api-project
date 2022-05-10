import create from "zustand";
import { Country as TCountry } from "@/model";
import { Country } from "api";

type State = {
  //if give [], typescript will judge it is never
  countries: TCountry[];

  getAllCountries: () => void;
  getCountryByName: (name: string) => void;
};

//Don't change state by current state, use method like set or get to control state.
export default create<State>((set, get) => ({
  countries: [],

  getAllCountries: async () => {
    //Fetch from API to get data back

    Country.getAll().then((countries) => set({ countries }));
  },

  async getCountryByName(name: string) {
    // Fetch from API by name to get data back
    Country.getByName(name).then((countries) => set({ countries }));
  },
}));
