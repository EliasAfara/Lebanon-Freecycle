import { useState } from 'react';

const useCategoryFilter = (setQueries, setQueryPage) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
    'Select Category'
  );

  const filterCategory = (cat) => {
    setCurrentSelectedCategory(cat);
    if (cat === 'All') {
      setCurrentCategory('');
      setQueries([]);
      setQueryPage('page=1');
    } else {
      setCurrentCategory(`category=${cat}`);
      setQueries([]);
      setQueryPage('page=1');
    }
  };

  return {
    filterCategory,
    currentCategory,
    currentSelectedCategory,
  };
};

export default useCategoryFilter;
