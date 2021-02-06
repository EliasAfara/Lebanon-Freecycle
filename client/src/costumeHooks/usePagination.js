const usePagination = (
  setQueries,
  timedSpinner,
  ChangeDonationsPage,
  ChangeRequestsPage
) => {
  const onPageChange = (page) => {
    if (ChangeDonationsPage) {
      ChangeDonationsPage(page, `page=${page}`);
    } else if (ChangeRequestsPage) {
      ChangeRequestsPage(page, `page=${page}`);
    }

    window.scrollTo(0, 0);
    timedSpinner();
    setQueries([]);
  };

  return {
    onPageChange,
  };
};

export default usePagination;
