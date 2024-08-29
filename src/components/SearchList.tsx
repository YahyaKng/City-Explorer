const SearchList = ({
  searches,
}: {
  searches: { name: string; lat: number; lng: number }[];
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Recent Searches</h3>
      <ul className="bg-white p-4 rounded shadow">
        {searches.length > 0 ? (
          searches.map((search, index) => (
            <li key={index} className="mb-2">
              {search.name}
            </li>
          ))
        ) : (
          <li>No recent searches</li>
        )}
      </ul>
    </div>
  );
};

export default SearchList;
