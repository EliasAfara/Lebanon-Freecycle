import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

import { getAllUserDonations } from '../../actions/donations';
import { DonationsCategories } from '../../shared/Categories';

import { GiBrokenHeartZone } from 'react-icons/gi';
import { Space, Spin } from 'antd';

const FilterBar = loadable(() => import('../FilterBar/FilterBar'));
const ItemCard = loadable(() => import('../ItemCard/ItemCard'));

const UserDonations = ({
  getAllUserDonations,
  donations: { userDonations, userDonationLoading },
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
    // console.log(queries);

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

      getAllUserDonations(activeQueries);
    }
  }, [
    getAllUserDonations,
    userNameInParam,
    queries,
    queryStatus,
    currentCategory,
  ]);

  return (
    <>
      {userDonationLoading ? (
        <div className='user-content-spinner'>
          <Space size='middle'>
            <Spin size='large' />
          </Space>
        </div>
      ) : (
        <>
          <Suspense
            fallback={
              <div className='user-content-spinner'>
                <Space size='middle'>
                  <Spin size='large' />
                </Space>
              </div>
            }
          >
            <div>
              <FilterBar
                filterStatus={filterStatus}
                currentSelectedStatus={currentSelectedStatus}
                categories={DonationsCategories}
                filterCategory={filterCategory}
                currentSelectedCategory={currentSelectedCategory}
              />
            </div>

            {userDonations && userDonations.length > 0 ? (
              userDonations.map((donation) => (
                <ItemCard
                  key={donation._id}
                  UserAvatar={donation.user.avatar}
                  FullName={donation.user.fullname}
                  Username={donation.user.username}
                  ItemName={donation.name}
                  ItemCategory={donation.category}
                  ItemStatus={donation.status}
                  ItemLocation={donation.location}
                  ItemDescription={donation.description}
                  ItemDateOfCreation={donation.date}
                  ItemID={donation._id}
                  ItemUserId={donation.user.id}
                  likes={donation.likes}
                  images={donation.images}
                  type='donation'
                />
              ))
            ) : (
              <div className='user-not-found'>
                <div
                  className='user-not-found-icon'
                  style={{ height: 'inherit', marginBottom: '-40px' }}
                >
                  <GiBrokenHeartZone
                    style={{ width: 100, fillOpacity: 0.34 }}
                  />
                </div>

                <p className='user-not-found-title'>
                  Sorry, couldn't find any donations.
                </p>
              </div>
            )}
          </Suspense>
        </>
      )}
    </>
  );
};

UserDonations.propTypes = {
  getAllUserDonations: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  donations: state.donations,
});

export default connect(mapStateToProps, { getAllUserDonations })(UserDonations);
