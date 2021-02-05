const useStatusFilter = (
  setQueries,
  setQueryPage,
  FilterDonationStatus,
  FilterRequestStatus
) => {
  const filterStatus = (value) => {
    if (value === 'All') {
      if (FilterDonationStatus) {
        FilterDonationStatus(value, '');
      } else if (FilterRequestStatus) {
        FilterRequestStatus(value, '');
      }

      setQueries([]);
      setQueryPage('page=1');
    } else {
      if (FilterDonationStatus) {
        FilterDonationStatus(value, `status=${value}`);
      } else if (FilterRequestStatus) {
        FilterRequestStatus(value, `status=${value}`);
      }

      setQueries([]);
      setQueryPage('page=1');
    }
  };

  return {
    filterStatus,
  };
};

export default useStatusFilter;
