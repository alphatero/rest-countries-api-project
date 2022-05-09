import create from "zustand";
import { Country as TCountry } from "model";
import { Country } from "api";

type State = {
  //if give [], typescript will judge it is never
  countries: TCountry[];
};

//Don't change state by current state, use method like set or get to control state.
export default create<State>((set, get) => ({
  countries: [],

  getAllCountries: async () => {
    //Fetch from API to get data back

    Country.get().then((countries) => set({ countries }));
  },
}));
