const CityInfo = ({
  name,
  country,
  timezone,
  flag,
  currency,
}: {
  name: string;
  country: string;
  timezone: string;
  flag: string;
  currency: string;
}) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>{country}</p>
      <p>Timezone: {timezone}</p>
      <p>Flag: {flag}</p>
      <p>Currency: {currency}</p>
    </div>
  );
};

export default CityInfo;
