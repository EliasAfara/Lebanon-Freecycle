import React, { useState } from 'react';
import loadable from '@loadable/component';
import { Select, Input, Button } from 'antd';
import { BiFilterAlt } from 'react-icons/bi';
import * as S from './styles';

const { Search } = Input;
const { Option } = Select;

const FilterBar = ({
  filterStatus,
  currentSelectedStatus,
  categories,
  filterCategory,
  currentSelectedCategory,
  LocationsData,
  filterLocation,
  currentSelectedLocation,
  partialSearch,
  currentSearchInput,
}) => {
  const [sideFilterBarVisible, setSideFilterBarVisible] = useState(false);

  const SideFilterBar = loadable(() => import('./SideFilterBar'), {
    fallback: <div>Loading...</div>,
  });

  const handlePartialSearch = (searchInput) => {
    if (searchInput.length !== 0) {
      console.log(searchInput);
      partialSearch(searchInput);
    }
  };
  const handlePartialSearchChange = (searchInput) => {
    console.log(searchInput.target.value);
    partialSearch(searchInput.target.value);
  };
  return (
    <>
      <S.FilterBarContaier>
        <S.FilterBar>
          <S.FilterSelector>
            <Select
              placeholder='Select Status'
              style={{ width: 120 }}
              onChange={filterStatus}
              value={
                currentSelectedStatus.length > 0
                  ? currentSelectedStatus
                  : 'Select Status'
              }
              title='Select Status'
            >
              <Option value='All'>All</Option>
              <Option value='Available'>Available</Option>
              <Option value='Completed'>Completed</Option>
            </Select>
          </S.FilterSelector>

          <S.FilterSelector>
            <Select
              showSearch
              style={{ width: 140 }}
              placeholder='Select Category'
              dropdownMatchSelectWidth={false}
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={filterCategory}
              value={
                currentSelectedCategory.length > 0
                  ? currentSelectedCategory
                  : 'Select Category'
              }
            >
              <Option value='All'>All</Option>
              {categories.map((category) => {
                return (
                  <Option key={category.id} value={category.title}>
                    {category.title}
                  </Option>
                );
              })}
            </Select>
          </S.FilterSelector>

          {filterLocation && currentSelectedLocation !== undefined && (
            <S.FilterSelector>
              <Select
                showSearch
                style={{ width: 160 }}
                placeholder='Select Location'
                defaultActiveFirstOption={false}
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={
                  currentSelectedLocation.length > 0
                    ? currentSelectedLocation
                    : 'Select Location'
                }
                onChange={filterLocation}
                autoComplete='chrome-off'
              >
                <Option value='All'>All</Option>
                {LocationsData.map((location, index) => {
                  return (
                    <Option key={index} value={location.Location_Name_En}>
                      {location.Location_Name_En + ' - ' + location.District}
                    </Option>
                  );
                })}
              </Select>
            </S.FilterSelector>
          )}

          {partialSearch && currentSearchInput !== undefined && (
            <S.SearchSelector style={{ width: '100%' }}>
              <Search
                placeholder='Search'
                allowClear
                value={currentSearchInput}
                onSearch={handlePartialSearch}
                onChange={handlePartialSearchChange}
              />
            </S.SearchSelector>
          )}

          <S.SideFilterBarContainer>
            <Button
              type='primary'
              onClick={() => setSideFilterBarVisible(true)}
            >
              <BiFilterAlt style={{ marginRight: '2px' }} />
              Filter
            </Button>
            <SideFilterBar
              onClose={() => setSideFilterBarVisible(false)}
              visible={sideFilterBarVisible}
              filterStatus={filterStatus}
              currentSelectedStatus={currentSelectedStatus}
              categories={categories}
              filterCategory={filterCategory}
              currentSelectedCategory={currentSelectedCategory}
              LocationsData={LocationsData}
              filterLocation={filterLocation}
              currentSelectedLocation={currentSelectedLocation}
            />
          </S.SideFilterBarContainer>
        </S.FilterBar>
      </S.FilterBarContaier>
    </>
  );
};

export default FilterBar;
