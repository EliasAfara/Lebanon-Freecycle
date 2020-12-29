import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllUserRequests } from '../../actions/requests';

import { RequestCategories } from '../../shared/Categories';

import ItemCard from '../ItemCard/ItemCard';
import FilterBar from '../FilterBar/FilterBar';
import Spinner from '../Spinner/Spinner';
import { GiBrokenHeartZone } from 'react-icons/gi';

const UserRequests = ({
  getAllUserRequests,
  requests: { userRequests, userRequestLoading },
  userNameInParam,
}) => {
  const [queries, setQueries] = useState([]);
  const [queryStatus, setQueryStatus] = useState('');

  const filterStatus = (value) => {
    if (value === 'All') {
      setQueryStatus('');
      setQueries([]);
    } else {
      setQueryStatus(`status=${value}`);
      setQueries([]);
    }
  };

  useEffect(() => {
    console.log(queries);

    if (queryStatus.length > 0) {
      queries.push(queryStatus);
      queries.push(`user.username=${userNameInParam}`);
    }

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllUserRequests(activeQueries);
    } else {
      getAllUserRequests(`user.username=${userNameInParam}`);
    }
  }, [getAllUserRequests, queries, queryStatus, userNameInParam]);

  return (
    <>
      {userRequestLoading ? (
        <Spinner />
      ) : (
        <>
          <FilterBar
            filterStatus={filterStatus}
            categories={RequestCategories}
          />
          {userRequests.length > 0 ? (
            userRequests.map((request) => (
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
            ))
          ) : (
            <div className='user-not-found'>
              <div
                className='user-not-found-icon'
                style={{ height: 'inherit', marginBottom: '-40px' }}
              >
                <GiBrokenHeartZone style={{ width: 100, fillOpacity: 0.34 }} />
              </div>

              <p className='user-not-found-title'>
                Sorry, couldn't find any requests.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

UserRequests.propTypes = {
  getAllUserRequests: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { getAllUserRequests })(UserRequests);
