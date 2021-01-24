import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllRequests } from '../actions/requests';
import { RequestCategories } from '../shared/Categories';
import useStatusFilter from '../costumeHooks/useStatusFilter';
import useCategoryFilter from '../costumeHooks/useCategoryFilter';
import usePagination from '../costumeHooks/usePagination';
import loadable from '@loadable/component';

import Spinner from '../components/Spinner/Spinner';
import { Pagination, Button } from 'antd';
import { GiBrokenHeartZone } from 'react-icons/gi';

const FilterBar = loadable(() => import('../components/FilterBar/FilterBar'));
const ItemCard = loadable(() => import('../components/ItemCard/ItemCard'));
const SideFilterBar = loadable(() =>
  import('../components/FilterBar/SideFilterBar')
);

const RequestsPage = ({
  getAllRequests,
  requests: {
    allRequests: { requests, totalRequests },
    loading,
  },
}) => {
  const [queries, setQueries] = useState([]);
  const [queryPage, setQueryPage] = useState('');

  const { filterStatus, queryStatus, currentSelectedStatus } = useStatusFilter(
    setQueries,
    setQueryPage
  );

  const {
    filterCategory,
    currentCategory,
    currentSelectedCategory,
  } = useCategoryFilter(setQueries, setQueryPage);

  const [showTimedSpinner, setShowTimedSpinner] = useState(false);
  const [sideFilterBarVisible, setSideFilterBarVisible] = useState(false);

  const timedSpinner = () => {
    setShowTimedSpinner(true);
    setTimeout(function () {
      setShowTimedSpinner(false);
    }, 1000);
  };

  const { onPageChange, currentPage } = usePagination(
    setQueries,
    setQueryPage,
    timedSpinner
  );

  useEffect(() => {
    if (requests === undefined) {
      getAllRequests(queryPage);
    }
  }, [getAllRequests, requests, queryPage]);

  useEffect(() => {
    if (queryPage.length > 0) {
      queries.push(queryPage);
    }
    if (queryStatus.length > 0) {
      queries.push(queryStatus);
    }
    if (currentCategory.length > 0) {
      let filteredCategory = currentCategory.replace(/&/g, 'and');

      queries.push(filteredCategory);
    }
    let updateAfterTenSeconds = true;

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllRequests(activeQueries);
      updateAfterTenSeconds = false;
    } else {
      if (updateAfterTenSeconds) {
        const interval = setInterval(() => {
          getAllRequests(queryPage);
        }, 10000);

        return () => clearInterval(interval);
      }
    }
  }, [getAllRequests, queries, queryPage, queryStatus, currentCategory]);

  // console.log(requests);

  return (
    <div style={{ maxWidth: '700px', width: 'inherit' }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showTimedSpinner ? (
            <Spinner />
          ) : (
            <>
              <div className='FilterBar-wrapper'>
                <FilterBar
                  filterStatus={filterStatus}
                  currentSelectedStatus={currentSelectedStatus}
                  categories={RequestCategories}
                  filterCategory={filterCategory}
                  currentSelectedCategory={currentSelectedCategory}
                />
              </div>

              <div className='SideFilterBar-wrapper'>
                <Button
                  type='primary'
                  onClick={() => setSideFilterBarVisible(true)}
                >
                  Filter Requests
                </Button>
                <SideFilterBar
                  onClose={() => setSideFilterBarVisible(false)}
                  visible={sideFilterBarVisible}
                  filterStatus={filterStatus}
                  currentSelectedStatus={currentSelectedStatus}
                  categories={RequestCategories}
                  filterCategory={filterCategory}
                  currentSelectedCategory={currentSelectedCategory}
                />
              </div>

              {requests && requests.length > 0 ? (
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
                      onChange={onPageChange}
                      total={totalRequests}
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
