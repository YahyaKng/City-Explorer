import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCityStore } from "./store/cityStore";
import fetchCityData from "./utils/api/cityApi";
import SearchBar from "./components/SearchBar";
import CityInfo from "./components/CityInfo";
import CityMap from "./components/CityMap";
import SearchList from "./components/SearchList";

const CityExplorer = () => {
  const [searchCity, setSearchCity] = useState("");
  const addSearch = useCityStore((state) => state.addSearch);
  const searches = useCityStore((state) => state.searches);

  const { data, error, isLoading } = useQuery({
    queryKey: ["cityData", searchCity],
    queryFn: () => fetchCityData(searchCity),
    enabled: !!searchCity,
  });

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const cityInfo = {
        name: data.results[0].formatted,
        lat: data.results[0].geometry.lat,
        lng: data.results[0].geometry.lng,
      };
      addSearch(cityInfo);
    }
  }, [data, addSearch]);

  const handleSearch = (city: string) => {
    setSearchCity(city);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/3">
          <SearchBar onSearch={handleSearch} />
          <SearchList searches={searches} />
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && data.results && data.results.length > 0 ? (
            <>
              <CityInfo
                name={data.results[0].formatted}
                country={data.results[0].components.country}
                timezone={data.results[0].annotations?.timezone?.name || "N/A"}
                flag={data.results[0].annotations?.flag || "N/A"}
                currency={data.results[0].annotations?.currency?.symbol}
              />
              <CityMap
                lat={data.results[0].geometry.lat}
                lng={data.results[0].geometry.lng}
              />
            </>
          ) : (
            <p>City not found. Please check your search input.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityExplorer;
