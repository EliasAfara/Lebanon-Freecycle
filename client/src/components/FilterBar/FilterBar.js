import React from 'react';
import './FilterBar.css';
import { Select } from 'antd';
const { Option } = Select;

const FilterBar = ({ filterStatus, categories }) => {
  return (
    <>
      <div className='filterBar-container'>
        <div className='filterBar'>
          <div className='filterBar__title'>
            <span className='filterBar__title-text'>Filter</span>
          </div>
          <div className='filterbar__filter'>
            <label className='filterbar__label'>Status:</label>
            <Select
              defaultValue='All'
              placeholder='Status'
              style={{ width: 120 }}
              onChange={filterStatus}
              title='Select Status'
            >
              <Option value='All'>All</Option>
              <Option value='Available'>Available</Option>
              <Option value='Completed'>Completed</Option>
            </Select>
          </div>

          <div className='filterbar__filter'>
            <label className='filterbar__label'>Category:</label>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Select Category'
              dropdownMatchSelectWidth={false}
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {categories.map((category) => {
                return (
                  <Option key={category.id} value={category.id}>
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
