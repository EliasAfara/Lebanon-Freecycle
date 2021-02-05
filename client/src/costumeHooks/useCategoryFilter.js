const useCategoryFilter = (
  setQueries,
  setQueryPage,
  FilterDonationCategory,
  FilterRequestCategory
) => {
  const filterCategory = (cat) => {
    if (cat === 'All') {
      if (FilterDonationCategory) {
        FilterDonationCategory(cat, '');
      } else if (FilterRequestCategory) {
        FilterRequestCategory(cat, '');
      }

      setQueries([]);
      setQueryPage('page=1');
    } else {
      if (FilterDonationCategory) {
        FilterDonationCategory(cat, `category=${cat}`);
      } else if (FilterRequestCategory) {
        FilterRequestCategory(cat, `category=${cat}`);
      }

      setQueries([]);
      setQueryPage('page=1');
    }
  };

  return {
    filterCategory,
  };
};

export default useCategoryFilter;
