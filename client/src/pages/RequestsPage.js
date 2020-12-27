import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getAllRequests } from '../actions/requests';

import { RequestCategories } from '../shared/Categories';
import { GiBrokenHeartZone } from 'react-icons/gi';

import ItemCard from '../components/ItemCard/ItemCard';
import FilterBar from '../components/FilterBar/FilterBar';
import Spinner from '../components/Spinner/Spinner';
import { Pagination } from 'antd';

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
  const [showTimedSpinner, setShowTimedSpinner] = useState(false);

  const timedSpinner = () => {
    setShowTimedSpinner(true);
    setTimeout(function () {
      setShowTimedSpinner(false);
    }, 1000);
  };

  const filterStatus = (value) => {
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

  useEffect(() => {
    console.log(queries);

    if (queryPage.length > 0) {
      queries.push(queryPage);
    }
    if (queryStatus.length > 0) {
      queries.push(queryStatus);
    }

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllRequests(activeQueries);
    } else {
      getAllRequests(queryPage);
    }
  }, [getAllRequests, queries, queryPage, queryStatus]);

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
              <FilterBar
                filterStatus={filterStatus}
                categories={RequestCategories}
              />
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
