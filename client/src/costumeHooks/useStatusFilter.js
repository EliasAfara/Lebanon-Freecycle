const useStatusFilter = (
  setQueries,
  FilterDonationStatus,
  ChangeDonationsPage,
  FilterRequestStatus,
  ChangeRequestsPage
) => {
  const filterStatus = (value) => {
    if (value === 'All') {
      if (FilterDonationStatus) {
        FilterDonationStatus(value, '');
      } else if (FilterRequestStatus) {
        FilterRequestStatus(value, '');
      }

      setQueries([]);

      if (ChangeDonationsPage) {
        ChangeDonationsPage(1, 'page=1');
      } else if (ChangeRequestsPage) {
        ChangeRequestsPage(1, 'page=1');
      }
    } else {
      if (FilterDonationStatus) {
        FilterDonationStatus(value, `status=${value}`);
      } else if (FilterRequestStatus) {
        FilterRequestStatus(value, `status=${value}`);
      }

      setQueries([]);

      if (ChangeDonationsPage) {
        ChangeDonationsPage(1, 'page=1');
      } else if (ChangeRequestsPage) {
        ChangeRequestsPage(1, 'page=1');
      }
    }
  };

  return {
    filterStatus,
  };
};

export default useStatusFilter;
