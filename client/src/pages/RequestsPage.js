import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import { RequestCategories } from '../shared/Categories';

import { getAllRequests } from '../actions/requests';
import { FilterRequestCategory, FilterRequestStatus } from '../actions/filters';
import { ChangeRequestsPage } from '../actions/pagination';
import { RequestsPartialSearch } from '../actions/search';

import useStatusFilter from '../costumeHooks/useStatusFilter';
import useCategoryFilter from '../costumeHooks/useCategoryFilter';
import usePagination from '../costumeHooks/usePagination';
import usePartialSearch from '../costumeHooks/usePartialSearch';

import Spinner from '../components/Spinner/Spinner';
import { Pagination, Space, Spin } from 'antd';
import { GiBrokenHeartZone } from 'react-icons/gi';

const FilterBar = loadable(() => import('../components/FilterBar/FilterBar'), {
  fallback: (
    <div style={{ textAlign: 'center' }}>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  ),
});
const ItemCard = loadable(() => import('../components/ItemCard/ItemCard'));

const RequestsPage = ({
  getAllRequests,
  requests: {
    allRequests: { requests, totalRequests },
    loading,
  },
  FilterRequestCategory,
  FilterRequestStatus,
  requestsFilters: {
    currentStatusFilter,
    currentSelectedStatus,

    currentCategoryFilter,
    currentSelectedCategory,
  },
  ChangeRequestsPage,
  requestsPagination: { currentPageQuery, currentSelectedPage },
  RequestsPartialSearch,
  requestsSearch: { currentSearchInput, currentSearchQuery },
}) => {
  const [queries, setQueries] = useState([]);

  const [showTimedSpinner, setShowTimedSpinner] = useState(false);

  const timedSpinner = () => {
    setShowTimedSpinner(true);
    setTimeout(function () {
      setShowTimedSpinner(false);
    }, 1000);
  };

  // Requests partial search
  const { partialSearch } = usePartialSearch(
    setQueries,
    RequestsPartialSearch,
    ChangeRequestsPage
  );

  // Filter Requests by Status
  const { filterStatus } = useStatusFilter(
    setQueries,
    FilterRequestStatus,
    ChangeRequestsPage
  );

  // Filter Requests by Category
  const { filterCategory } = useCategoryFilter(
    setQueries,
    FilterRequestCategory,
    ChangeRequestsPage
  );

  // Change Requests page
  const { onPageChange } = usePagination(
    setQueries,
    timedSpinner,
    ChangeRequestsPage
  );

  useEffect(() => {
    if (requests === undefined) {
      getAllRequests(currentPageQuery);
    }
  }, [getAllRequests, requests, currentPageQuery]);

  useEffect(() => {
    if (currentPageQuery.length > 0) {
      queries.push(currentPageQuery);
    }
    if (currentSearchQuery.length > 0) {
      queries.push(currentSearchQuery);
    }
    if (currentStatusFilter.length > 0) {
      queries.push(currentStatusFilter);
    }
    if (currentCategoryFilter.length > 0) {
      let filteredCategory = currentCategoryFilter.replace(/&/g, 'and');

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
          getAllRequests(currentPageQuery);
        }, 10000);

        return () => clearInterval(interval);
      }
    }
  }, [
    getAllRequests,
    queries,
    currentPageQuery,
    currentStatusFilter,
    currentCategoryFilter,
    currentSearchQuery,
  ]);

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
              <div>
                <FilterBar
                  filterStatus={filterStatus}
                  currentSelectedStatus={currentSelectedStatus}
                  categories={RequestCategories}
                  filterCategory={filterCategory}
                  currentSelectedCategory={currentSelectedCategory}
                  partialSearch={partialSearch}
                  currentSearchInput={currentSearchInput}
                />
              </div>

              {requests && requests.length > 0 ? (
                <>
                  {requests.map((request) => (
                    <ItemCard
                      key={request?._id}
                      UserAvatar={request.user.avatar}
                      FullName={request.user.fullname}
                      Username={request.user.username}
                      ItemName={request.name}
                      ItemCategory={request.category}
                      ItemStatus={request.status}
                      ItemDescription={request.description}
                      ItemDateOfCreation={request.date}
                      ItemID={request?._id}
                      ItemUserId={request.user.id}
                      likes={request.likes}
                      images={request.images}
                      type='request'
                    />
                  ))}
                  <div className='pagination'>
                    <Pagination
                      defaultCurrent={1}
                      current={currentSelectedPage}
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

  FilterRequestCategory: PropTypes.func.isRequired,
  FilterRequestStatus: PropTypes.func.isRequired,
  RequestsPartialSearch: PropTypes.func.isRequired,

  ChangeRequestsPage: PropTypes.func.isRequired,

  requests: PropTypes.object.isRequired,
  requestsFilters: PropTypes.object.isRequired,
  requestsSearch: PropTypes.object.isRequired,
  requestsPagination: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requestsFilters: state.filters.requestsFilters,
  requestsSearch: state.search.requestsSearch,
  requestsPagination: state.pagination.requestsPagination,
  requests: state.requests,
});

export default connect(mapStateToProps, {
  getAllRequests,
  FilterRequestCategory,
  FilterRequestStatus,
  ChangeRequestsPage,
  RequestsPartialSearch,
})(RequestsPage);
