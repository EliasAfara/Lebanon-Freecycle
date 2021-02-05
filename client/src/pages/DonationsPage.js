import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllDonations } from '../actions/donations';
import {
  FilterDonationLocation,
  FilterDonationCategory,
  FilterDonationStatus,
} from '../actions/filters';
import { DonationsCategories } from '../shared/Categories';
import useStatusFilter from '../costumeHooks/useStatusFilter';
import useCategoryFilter from '../costumeHooks/useCategoryFilter';
import usePagination from '../costumeHooks/usePagination';
import { Locations } from '../shared/Locations';
import loadable from '@loadable/component';

import Spinner from '../components/Spinner/Spinner';
import './DonationPageStyles.css';
import * as S from '../components/layout/styles';
import { Pagination, Button } from 'antd';
import { GiBrokenHeartZone } from 'react-icons/gi';
import useLocationFilter from '../costumeHooks/useLocationFilter';

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
  FilterDonationLocation,
  FilterDonationCategory,
  FilterDonationStatus,
  donationsFilters: {
    currentStatusFilter,
    currentSelectedStatus,

    currentCategoryFilter,
    currentSelectedCategory,

    currentLocationFilter,
    currentSelectedLocation,
  },
}) => {
  const [queries, setQueries] = useState([]);
  const [queryPage, setQueryPage] = useState('');

  const { filterStatus } = useStatusFilter(
    setQueries,
    setQueryPage,
    FilterDonationStatus
  );

  const { filterCategory } = useCategoryFilter(
    setQueries,
    setQueryPage,
    FilterDonationCategory
  );

  const { filterLocation } = useLocationFilter(
    setQueries,
    setQueryPage,
    FilterDonationLocation
  );

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
    if (donations === undefined) {
      getAllDonations(queryPage);
    }
  }, [getAllDonations, donations, queryPage]);

  useEffect(() => {
    if (queryPage.length > 0) {
      queries.push(queryPage);
    }
    if (currentStatusFilter.length > 0) {
      queries.push(currentStatusFilter);
    }
    if (currentLocationFilter.length > 0) {
      queries.push(currentLocationFilter);
    }
    if (currentCategoryFilter.length > 0) {
      let filteredCategory = currentCategoryFilter.replace(/&/g, 'and');

      queries.push(filteredCategory);
    }
    let updateAfterTenSeconds = true;

    if (queries.length > 0) {
      const activeQueries = queries.join('&');
      getAllDonations(activeQueries);
      updateAfterTenSeconds = false;
    } else {
      if (updateAfterTenSeconds) {
        const interval = setInterval(() => {
          getAllDonations(queryPage);
        }, 60000);

        return () => clearInterval(interval);
      }
    }
  }, [
    getAllDonations,
    queries,
    queryPage,
    currentStatusFilter,
    currentCategoryFilter,
    currentLocationFilter,
  ]);

  // console.log(donations);

  return (
    <S.PageContainer>
      {DonatinosLoading ? (
        <Spinner />
      ) : (
        <>
          {showTimedSpinner ? (
            <Spinner />
          ) : (
            <>
              <S.ContentContainer>
                <div className='FilterBar-wrapper'>
                  <FilterBar
                    filterStatus={filterStatus}
                    currentSelectedStatus={currentSelectedStatus}
                    categories={DonationsCategories}
                    filterCategory={filterCategory}
                    currentSelectedCategory={currentSelectedCategory}
                    LocationsData={Locations}
                    filterLocation={filterLocation}
                    currentSelectedLocation={currentSelectedLocation}
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
                    LocationsData={Locations}
                    filterLocation={filterLocation}
                    currentSelectedLocation={currentSelectedLocation}
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
              </S.ContentContainer>

              {donations &&
                donations.length > 0 &&
                currentSelectedStatus !== 'Completed' && (
                  <S.SideContentContainer>
                    <Map
                      multipleMarkers={true}
                      multipleLocationData={donations}
                    />
                  </S.SideContentContainer>
                )}
            </>
          )}
        </>
      )}
    </S.PageContainer>
  );
};

DonationsPage.propTypes = {
  getAllDonations: PropTypes.func.isRequired,
  FilterDonationLocation: PropTypes.func.isRequired,
  FilterDonationCategory: PropTypes.func.isRequired,
  FilterDonationStatus: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
  donationsFilters: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  donationsFilters: state.filters.donationsFilters,
  donations: state.donations,
});

export default connect(mapStateToProps, {
  getAllDonations,
  FilterDonationLocation,
  FilterDonationCategory,
  FilterDonationStatus,
})(DonationsPage);
