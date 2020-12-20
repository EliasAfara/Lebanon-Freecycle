import React from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
//import PropTypes from 'prop-types'

import ItemCard from '../components/ItemCard/ItemCard';

const ItemDetails = {
  ItemImage:
    'https://cdn20.pamono.com/p/g/3/6/362466_jiei2h8vpp/vintage-belgian-black-leather-couch-1974-5.jpg',
  UserAvatar: 'https://semantic-ui.com/images/avatar2/small/mark.png',
  FullName: 'Elias Afara',
  Username: 'elias',
  ItemName: 'Couch',
  ItemCategory: 'Fourniture',
  ItemState: 'Used',
  ItemLocation: 'Tyre, Lebanon',
  ItemAddress: 'Tyre, Behind Al Ekhlas Resturant',
  ItemDescription: 'Old and used couch',
  ItemDateOfCreation: '2020-11-26T00:02:28.503+00:00',
  ItemID: '123456789',
  status: true,
};

const {
  ItemImage,
  UserAvatar,
  FullName,
  Username,
  ItemName,
  ItemCategory,
  ItemState,
  ItemLocation,
  ItemAddress,
  ItemDescription,
  ItemDateOfCreation,
  ItemID,
  status,
} = ItemDetails;

const AvailableDonations = (
  // Should be an array that contains all the available donations
  // maps over the donations schema
  <ItemCard
    ItemImage={ItemImage}
    UserAvatar={UserAvatar}
    FullName={FullName}
    Username={Username}
    ItemName={ItemName}
    ItemCategory={ItemCategory}
    ItemState={ItemState}
    ItemLocation={ItemLocation}
    ItemAddress={ItemAddress}
    ItemDescription={ItemDescription}
    ItemDateOfCreation={ItemDateOfCreation}
    ItemID={ItemID}
    ItemStatus={status}
  />
);

const CompletedDonations = (
  // Should be an array that contains all the completed donations
  // maps over the donations schema
  <>
    <ItemCard
      ItemImage={ItemImage}
      UserAvatar={UserAvatar}
      FullName={FullName}
      Username={Username}
      ItemName={ItemName}
      ItemCategory={ItemCategory}
      ItemState={ItemState}
      ItemLocation={ItemLocation}
      ItemAddress={ItemAddress}
      ItemDescription={ItemDescription}
      ItemDateOfCreation={ItemDateOfCreation}
      ItemID={ItemID}
      ItemStatus={false}
    />
    <ItemCard
      ItemImage={ItemImage}
      UserAvatar={UserAvatar}
      FullName={FullName}
      Username={Username}
      ItemName={ItemName}
      ItemCategory={ItemCategory}
      ItemState={ItemState}
      ItemLocation={ItemLocation}
      ItemAddress={ItemAddress}
      ItemDescription={ItemDescription}
      ItemDateOfCreation={ItemDateOfCreation}
      ItemID={ItemID}
      ItemStatus={false}
    />
  </>
);

const DonationsPage = (props) => {
  return (
    <div style={{ maxWidth: '1000px', width: 'inherit' }}>
      <FilterBar />
      {AvailableDonations}
      {CompletedDonations}
    </div>
  );
};

// Donations.propTypes = {

// }

export default DonationsPage;
