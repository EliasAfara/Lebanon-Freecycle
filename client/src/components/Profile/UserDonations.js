import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllUserDonations } from '../../actions/donations';
import { DonationsCategories } from '../../shared/Categories';

import ItemCard from '../ItemCard/ItemCard';
import FilterBar from '../FilterBar/FilterBar';
import Spinner from '../Spinner/Spinner';
import { GiBrokenHeartZone } from 'react-icons/gi';
import { Button } from 'antd';
import SideFilterBar from '../FilterBar/SideFilterBar';

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
        <Spinner />
      ) : (
        <>
          <div className='FilterBar-wrapper'>
            <FilterBar
              filterStatus={filterStatus}
              currentSelectedStatus={currentSelectedStatus}
              categories={DonationsCategories}
              filterCategory={filterCategory}
              currentSelectedCategory={currentSelectedCategory}
            />
          </div>

          <div className='SideFilterBar-wrapper'>
            <Button
              type='primary'
              onClick={() => setSideFilterBarVisible(true)}
            >
              Filter
            </Button>
            <SideFilterBar
              onClose={() => setSideFilterBarVisible(false)}
              visible={sideFilterBarVisible}
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
                <GiBrokenHeartZone style={{ width: 100, fillOpacity: 0.34 }} />
              </div>

              <p className='user-not-found-title'>
                Sorry, couldn't find any donations.
              </p>
            </div>
          )}
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
