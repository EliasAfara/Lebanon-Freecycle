import React from 'react';
import { Tabs } from 'antd';
import './Tabs.css';

const NavTabs = ({
  firstTab,
  secondTab,
  firstComponent,
  secondComponent,
  size,
}) => {
  const { TabPane } = Tabs;
  if (!size) {
    size = 'default';
  }
  return (
    <>
      <Tabs defaultActiveKey='1' size={size} centered>
        {firstComponent && (
          <TabPane tab={firstTab} key='1'>
            {firstComponent}
          </TabPane>
        )}
        {secondComponent && (
          <TabPane tab={secondTab} key='2'>
            {secondComponent}
          </TabPane>
        )}
      </Tabs>
    </>
  );
};

export default NavTabs;
