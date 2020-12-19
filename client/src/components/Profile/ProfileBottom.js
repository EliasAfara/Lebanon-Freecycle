import React from 'react';
//import PropTypes from 'prop-types';
import Tabs from '../Tabs/NavTabs';
import ItemCard from '../ItemCard/ItemCard';
import UserDonations from './UserDonations';
import UserRequests from './UserRequests';

import { GiLifeSupport } from 'react-icons/gi';
import { GiNestedHearts } from 'react-icons/gi';

// Fetching Donations & Requests

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
  ItemDateOfCreation: '11/26/2020 11:57 AM',
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

// ############################################################################################
// Donations

const CurrentUserDonations = (
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
      ItemStatus={status}
    />
  </>
);

// ############################################################################################
// Requests

const CurrentUserRequests = (
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
      ItemStatus={status}
    />
  </>
);

/**
 * This file will fetch the user personal donations (available & completed) & perosnal requests (available & completed)
 * Then pass them through props into their respective component which will display them
 *
 * map over all donations and requests, filter them then pass them as props
 *
 */

const ProfileBottom = ({ totalDonations, totalRequests }) => {
  return (
    <>
      {totalDonations === 0 && totalRequests === 0 ? (
        <p>No Donations & Requests</p>
      ) : (
        <Tabs
          firstTab={
            <span>
              <GiNestedHearts /> Donations
            </span>
          }
          firstKey='Donations'
          firstComponent={
            totalDonations !== 0 && (
              <UserDonations userDonations={CurrentUserDonations} />
            )
          }
          secondTab={
            <span>
              <GiLifeSupport /> Requests
            </span>
          }
          secondKey='Requests'
          secondComponent={
            totalRequests !== 0 && (
              <UserRequests userRequests={CurrentUserRequests} />
            )
          }
          size='large'
        />
      )}
    </>
  );
};

//ProfileBottom.propTypes = {};

export default ProfileBottom;
