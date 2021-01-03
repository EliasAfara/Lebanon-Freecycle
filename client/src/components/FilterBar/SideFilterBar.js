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
}) => {
  const SidebarFilterStatus = (value) => {
    onClose();
    filterStatus(value);
  };

  const SidebarFilterCategory = (value) => {
    onClose();
    filterCategory(value);
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
            value={currentSelectedStatus}
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
      </Drawer>
    </>
  );
};

export default SideFilterBar;
