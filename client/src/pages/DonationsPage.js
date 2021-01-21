import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllDonations } from '../actions/donations';
import { DonationsCategories } from '../shared/Categories';
import useStatusFilter from '../costumeHooks/useStatusFilter';
import useCategoryFilter from '../costumeHooks/useCategoryFilter';
import usePagination from '../costumeHooks/usePagination';
import loadable from '@loadable/component';

import Spinner from '../components/Spinner/Spinner';
import './DonationPageStyles.css';
import { Pagination, Button } from 'antd';
import { GiBrokenHeartZone } from 'react-icons/gi';

const Map = loadable(() => import('../components/Map'));
const FilterBar = loadable(() => import('../components/FilterBar/FilterBar'), {
  fallback: <div>Loading...</div>,
});
const ItemCard = loadable(() => import('../components/ItemCard/ItemCard'), {
  fallback: <div>Loading...</div>,
});
const SideFilterBar = loadable(
  () => import('../components/FilterBar/SideFilterBar'),
  {
    fallback: <div>Loading...</div>,
  }
);

const DonationsPage = ({
  getAllDonations,
  donations: {
    allDonations: { donations, totalDonations },
    DonatinosLoading,
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

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllDonations(activeQueries);
    } else {
      getAllDonations(queryPage);
    }
  }, [getAllDonations, queries, queryPage, queryStatus, currentCategory]);

  console.log(donations);

  return (
    <div className='donations-page-container'>
      {DonatinosLoading ? (
        <Spinner />
      ) : (
        <>
          {showTimedSpinner ? (
            <Spinner />
          ) : (
            <>
              <div className='dontions-timeline'>
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

                {donations && donations.length > 0 ? (
                  <>
                    {donations.map((donation) => (
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
                    ))}
                    <div className='pagination'>
                      <Pagination
                        defaultCurrent={1}
                        current={currentPage}
                        onChange={onPageChange}
                        total={totalDonations}
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
                      Sorry, couldn't find any donations.
                    </p>
                  </div>
                )}
              </div>

              {donations && donations.length > 0 && (
                <div className='donations-map-container'>
                  <Map
                    multipleMarkers={true}
                    multipleLocationData={donations}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

DonationsPage.propTypes = {
  getAllDonations: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  donations: state.donations,
});

export default connect(mapStateToProps, { getAllDonations })(DonationsPage);
