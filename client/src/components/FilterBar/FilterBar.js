import React from 'react';
import { Select } from 'antd';
import * as S from './styles';
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
}) => {
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
                style={{ width: 140 }}
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
        </S.FilterBar>
      </S.FilterBarContaier>
    </>
  );
};

export default FilterBar;
