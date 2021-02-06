import React from 'react';
import { Drawer, Select, Divider } from 'antd';
const { Option } = Select;

const SideFilterBar = ({
  onClose,
  visible,
  filterStatus,
  currentSelectedStatus,
  categories,
  filterCategory,
  currentSelectedCategory,
  LocationsData,
  filterLocation,
  currentSelectedLocation,
}) => {
  const SidebarFilterStatus = (value) => {
    onClose();
    filterStatus(value);
  };

  const SidebarFilterCategory = (value) => {
    onClose();
    filterCategory(value);
  };

  const SidebarFilterLocation = (value) => {
    onClose();
    filterLocation(value);
  };
  return (
    <>
      <Drawer
        title='Filter Requests'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Divider>Status</Divider>
        <div>
          <Select
            placeholder='Select Status'
            style={{ width: 200 }}
            onChange={SidebarFilterStatus}
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
        </div>
        <br />

        <Divider>Category</Divider>
        <div>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder='Select Category'
            dropdownMatchSelectWidth={false}
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={SidebarFilterCategory}
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
        </div>
        <br />

        {filterLocation && currentSelectedLocation !== undefined && (
          <>
            <Divider>Location</Divider>
            <div>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder='Select Location'
                defaultActiveFirstOption={false}
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                autoComplete='chrome-off'
                value={
                  currentSelectedLocation.length > 0
                    ? currentSelectedLocation
                    : 'Select Location'
                }
                onChange={SidebarFilterLocation}
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
            </div>
          </>
        )}
      </Drawer>
    </>
  );
};

export default SideFilterBar;
