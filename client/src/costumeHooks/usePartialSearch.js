const usePartialSearch = (
  setQueries,
  DonationsPartialSearch,
  ChangeDonationsPage,
  RequestsPartialSearch,
  ChangeRequestsPage
) => {
  const partialSearch = (searchInput) => {
    if (DonationsPartialSearch) {
      DonationsPartialSearch(searchInput, `name=${searchInput}`);
    } else if (RequestsPartialSearch) {
      RequestsPartialSearch(searchInput, `name=${searchInput}`);
    }

    setQueries([]);

    if (ChangeDonationsPage) {
      ChangeDonationsPage(1, 'page=1');
    } else if (ChangeRequestsPage) {
      ChangeRequestsPage(1, 'page=1');
    }
  };

  return {
    partialSearch,
  };
};

export default usePartialSearch;
