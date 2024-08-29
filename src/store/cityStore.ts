import create from "zustand";

export type City = {
  name: string;
  lat: number;
  lng: number;
};

type CityStore = {
  searches: City[];
  addSearch: (city: City) => void;
};

export const useCityStore = create<CityStore>((set) => ({
  searches: [],
  addSearch: (city) =>
    set((state) => {
      const updatedSearches = [city, ...state.searches.slice(0, 9)];
      return { searches: updatedSearches };
    }),
}));
