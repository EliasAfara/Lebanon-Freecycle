import React from 'react';
//import PropTypes from 'prop-types'

import ItemCard from '../components/ItemCard/ItemCard';
import Tabs from '../components/Tabs/NavTabs';

const ItemDetails = {
  UserAvatar: 'https://semantic-ui.com/images/avatar2/small/mark.png',
  FullName: 'Elias Afara',
  Username: 'elias',
  ItemName: 'Couch',
  ItemCategory: 'Fourniture',
  ItemState: 'Used',
  ItemLocation: 'Tyre, Lebanon',
  ItemAddress: 'Tyre, Behind Al Ekhlas Resturant',
  ItemDescription: 'Old and used couch',
  ItemDateOfCreation: '2020-11-28T00:02:48.503+00:00',
  ItemID: '123456789',
  status: true,
};

const {
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

const AvailableRequests = (
  // Should be an array that contains all the available Requests
  // maps over the Requests schema
  <ItemCard
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

const CompletedRequests = (
  // Should be an array that contains all the completed Requests
  // maps over the Requests schema
  <>
    <ItemCard
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

const RequestsPage = (props) => {
  return (
    <>
      <Tabs
        firstTab='Available'
        secondTab='Completed'
        firstComponent={AvailableRequests}
        secondComponent={CompletedRequests}
        size='large'
      />
    </>
  );
};

// Requests.propTypes = {

// }

export default RequestsPage;
