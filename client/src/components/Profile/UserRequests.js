import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllUserRequests } from '../../actions/requests';

import { RequestCategories } from '../../shared/Categories';

import ItemCard from '../ItemCard/ItemCard';
import FilterBar from '../FilterBar/FilterBar';
import { GiBrokenHeartZone } from 'react-icons/gi';
import { Button, Space, Spin } from 'antd';
import SideFilterBar from '../FilterBar/SideFilterBar';

const UserRequests = ({
  getAllUserRequests,
  requests: { userRequests, userRequestLoading },
  userNameInParam,
}) => {
  const [queries, setQueries] = useState([]);
  const [queryStatus, setQueryStatus] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');

  const [currentSelectedStatus, setCurrentSelectedStatus] = useState(
    'Select Status'
  );
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
    'Select Category'
  );

  const [sideFilterBarVisible, setSideFilterBarVisible] = useState(false);

  const filterStatus = (value) => {
    setCurrentSelectedStatus(value);
    if (value === 'All') {
      setQueryStatus('');
      setQueries([]);
    } else {
      setQueryStatus(`status=${value}`);
      setQueries([]);
    }
  };
  const filterCategory = (cat) => {
    setCurrentSelectedCategory(cat);
    if (cat === 'All') {
      setCurrentCategory('');
      setQueries([]);
    } else {
      setCurrentCategory(`category=${cat}`);
      setQueries([]);
    }
  };

  useEffect(() => {
    console.log(queries);

    queries.push(`user.username=${userNameInParam}`);

    if (currentCategory.length > 0) {
      let filteredCategory = currentCategory.replace(/&/g, 'and');

      queries.push(filteredCategory);
    }
    if (queryStatus.length > 0) {
      queries.push(queryStatus);
    }

    if (queries.length > 0) {
      const activeQueries = queries.join('&');

      getAllUserRequests(activeQueries);
    }
  }, [
    getAllUserRequests,
    userNameInParam,
    queries,
    queryStatus,
    currentCategory,
  ]);

  return (
    <>
      {userRequestLoading ? (
        <div className='user-content-spinner'>
          <Space size='middle'>
            <Spin size='large' />
          </Space>
        </div>
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
                images={request.images}
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
