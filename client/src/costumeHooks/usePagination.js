import { useState } from 'react';

const usePagination = (setQueries, setQueryPage, timedSpinner) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    setQueryPage(`page=${page}`);
    window.scrollTo(0, 0);
    timedSpinner();
    setQueries([]);
  };

  return {
    onPageChange,
    currentPage,
  };
};

export default usePagination;
