import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getAllRequests } from '../actions/requests';

import { RequestCategories } from '../shared/Categories';
import { GiBrokenHeartZone } from 'react-icons/gi';

import '../components/FilterBar/FilterBar.css';
import ItemCard from '../components/ItemCard/ItemCard';
//import FilterBar from '../components/FilterBar/FilterBar';
import Spinner from '../components/Spinner/Spinner';
import { Pagination } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

const RequestsPage = ({
  getAllRequests,
  requests: {
    allRequests: { requests, totalPages },
    loading,
  },
}) => {
  const [queries, setQueries] = useState([]);
  const [queryPage, setQueryPage] = useState('');
  const [queryStatus, setQueryStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('');
  const [showTimedSpinner, setShowTimedSpinner] = useState(false);

  const [currentSelectedStatus, setCurrentSelectedStatus] = useState(
    'Select Status'
  );
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
    'Select Category'
  );
  const timedSpinner = () => {
    setShowTimedSpinner(true);
    setTimeout(function () {
      setShowTimedSpinner(false);
    }, 1000);
  };

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

  const onChange = (page) => {
    setCurrentPage(page);
    setQueryPage(`page=${page}`);
    window.scrollTo(0, 0);
    timedSpinner();
    setQueries([]);
  };

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

  useEffect(() => {
    if (queryPage.length > 0) {
      queries.push(queryPage);
    }
    if (queryStatus.length > 0) {
      queries.push(queryStatus);
    }
    if (currentCategory.length > 0) {
      queries.push(currentCategory);
    }

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllRequests(activeQueries);
    } else {
      getAllRequests(queryPage);
    }
  }, [getAllRequests, queries, queryPage, queryStatus, currentCategory]);

  console.log(requests);

  return (
    <div style={{ maxWidth: '1000px', width: 'inherit' }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showTimedSpinner ? (
            <Spinner />
          ) : (
            <>
              <>
                <div className='filterBar-container'>
                  <div className='filterBar'>
                    <div className='filterBar__title'>
                      <span className='filterBar__title-text'>Filter</span>
                    </div>
                    <div className='filterbar__filter'>
                      <label className='filterbar__label'>Status:</label>
                      <Select
                        placeholder='Select Status'
                        style={{ width: 120 }}
                        onChange={filterStatus}
                        title='Select Status'
                        defaultValue='All'
                        value={currentSelectedStatus}
                      >
                        <Option value='All'>All</Option>
                        <Option value='Available'>Available</Option>
                        <Option value='Completed'>Completed</Option>
                      </Select>
                    </div>

                    <div className='filterbar__filter'>
                      <label className='filterbar__label'>Category:</label>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder='Select Category'
                        dropdownMatchSelectWidth={false}
                        optionFilterProp='children'
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={filterCategory}
                        value={currentSelectedCategory}
                      >
                        <Option value='All'>All</Option>
                        {RequestCategories.map((category) => {
                          return (
                            <Option key={category.id} value={category.title}>
                              {category.title}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>
                  </div>
                </div>
              </>
              {requests.length > 0 ? (
                <>
                  {requests.map((request) => (
                    <ItemCard
                      key={request._id}
                      UserAvatar={request.user.avatar}
                      FullName={request.user.fullname}
                      Username={request.user.username}
                      ItemName={request.name}
                      ItemCategory={request.category}
                      ItemStatus={request.status}
                      ItemDescription={request.description}
                      ItemDateOfCreation={request.date}
                      ItemID={request._id}
                      ItemUserId={request.user.id}
                      likes={request.likes}
                      images={request.images}
                      type='request'
                    />
                  ))}
                  <div className='pagination'>
                    <Pagination
                      defaultCurrent={1}
                      current={currentPage}
                      onChange={onChange}
                      total={totalPages}
                      showSizeChanger={false}
                      hideOnSinglePage={true}
                    />
                  </div>
                </>
              ) : (
                <div className='user-not-found'>
                  <div className='user-not-found-icon'>
                    <GiBrokenHeartZone
                      style={{ width: 100, height: 100, fillOpacity: 0.34 }}
                    />
                  </div>

                  <p className='user-not-found-title'>
                    Sorry, couldn't find any requests.
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

RequestsPage.propTypes = {
  getAllRequests: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { getAllRequests })(RequestsPage);
