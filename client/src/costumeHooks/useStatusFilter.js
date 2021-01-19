import { useState } from 'react';

const useStatusFilter = (setQueries, setQueryPage) => {
  const [queryStatus, setQueryStatus] = useState('');
  const [currentSelectedStatus, setCurrentSelectedStatus] = useState(
    'Select Status'
  );

  const filterStatus = (value) => {
    setCurrentSelectedStatus(value);
    if (value === 'All') {
      setQueryStatus('');
      setQueries([]);
      setQueryPage('page=1');
    } else {
      setQueryStatus(`status=${value}`);
      setQueries([]);
      setQueryPage('page=1');
    }
  };

  return {
    filterStatus,
    queryStatus,
    currentSelectedStatus,
  };
};

export default useStatusFilter;
