import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllDonations } from '../actions/donations';
import { DonationsCategories } from '../shared/Categories';

import FilterBar from '../components/FilterBar/FilterBar';
import ItemCard from '../components/ItemCard/ItemCard';
import SideFilterBar from '../components/FilterBar/SideFilterBar';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Spinner from '../components/Spinner/Spinner';
import './DonationPageStyles.css';
import { Pagination, Button } from 'antd';
import { GiBrokenHeartZone } from 'react-icons/gi';

const DonationsPage = ({
  getAllDonations,
  donations: {
    allDonations: { donations, totalDonations },
    DonatinosLoading,
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
  const [sideFilterBarVisible, setSideFilterBarVisible] = useState(false);

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
                        onChange={onChange}
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
                  <MapContainer center={[33.8547, 35.8623]} zoom={8}>
                    <TileLayer
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {donations.map((donation, index) => (
                      <Marker
                        key={index}
                        position={[
                          donation.location.latitude,
                          donation.location.longitude,
                        ]}
                      >
                        <Popup>
                          {donation.name} <br />{' '}
                          {donation.location.locationName}
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
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
