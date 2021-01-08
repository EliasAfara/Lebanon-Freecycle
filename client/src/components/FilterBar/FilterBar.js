import React from 'react';
import './FilterBar.css';
import { Select } from 'antd';
const { Option } = Select;

const FilterBar = ({
  filterStatus,
  currentSelectedStatus,
  categories,
  filterCategory,
  currentSelectedCategory,
}) => {
  return (
    <>
      <div className='filterBar-container'>
        <div className='filterBar'>
          <div className='filterbar__filter'>
            <Select
              placeholder='Select Status'
              style={{ width: 120 }}
              onChange={filterStatus}
              value={currentSelectedStatus}
              title='Select Status'
            >
              <Option value='All'>All</Option>
              <Option value='Available'>Available</Option>
              <Option value='Completed'>Completed</Option>
            </Select>
          </div>

          <div className='filterbar__filter'>
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
              value={currentSelectedCategory}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
