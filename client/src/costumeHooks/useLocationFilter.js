const useLocationFilter = (
  setQueries,
  FilterDonationLocation,
  ChangeDonationsPage
) => {
  const filterLocation = (cat) => {
    if (cat === 'All') {
      FilterDonationLocation(cat, '');

      setQueries([]);
      ChangeDonationsPage(1, 'page=1');
    } else {
      FilterDonationLocation(cat, `location.locationName=${cat}`);
      setQueries([]);
      ChangeDonationsPage(1, 'page=1');
    }
  };

  return {
    filterLocation,
  };
};

export default useLocationFilter;
