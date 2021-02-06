const useCategoryFilter = (
  setQueries,
  FilterDonationCategory,
  ChangeDonationsPage,
  FilterRequestCategory,
  ChangeRequestsPage
) => {
  const filterCategory = (cat) => {
    if (cat === 'All') {
      if (FilterDonationCategory) {
        FilterDonationCategory(cat, '');
      } else if (FilterRequestCategory) {
        FilterRequestCategory(cat, '');
      }

      if (ChangeDonationsPage) {
        ChangeDonationsPage(1, 'page=1');
      } else if (ChangeRequestsPage) {
        ChangeRequestsPage(1, 'page=1');
      }

      setQueries([]);
    } else {
      if (FilterDonationCategory) {
        FilterDonationCategory(cat, `category=${cat}`);
      } else if (FilterRequestCategory) {
        FilterRequestCategory(cat, `category=${cat}`);
      }

      if (ChangeDonationsPage) {
        ChangeDonationsPage(1, 'page=1');
      } else if (ChangeRequestsPage) {
        ChangeRequestsPage(1, 'page=1');
      }

      setQueries([]);
    }
  };

  return {
    filterCategory,
  };
};

export default useCategoryFilter;
