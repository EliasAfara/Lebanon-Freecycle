const useLocationFilter = (
  setQueries,
  setQueryPage,
  FilterDonationLocation
) => {
  const filterLocation = (cat) => {
    if (cat === 'All') {
      FilterDonationLocation(cat, '');

      setQueries([]);
      setQueryPage('page=1');
    } else {
      FilterDonationLocation(cat, `location.locationName=${cat}`);
      setQueries([]);
      setQueryPage('page=1');
    }
  };

  return {
    filterLocation,
  };
};

export default useLocationFilter;
