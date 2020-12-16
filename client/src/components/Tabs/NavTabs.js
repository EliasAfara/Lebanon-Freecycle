import React from 'react';
import { Tabs } from 'antd';
import './Tabs.css';

const NavTabs = ({
  firstTab,
  firstKey,
  firstComponent,
  secondTab,
  secondKey,
  secondComponent,
  size,
}) => {
  const { TabPane } = Tabs;
  if (!size) {
    size = 'default';
  }
  return (
    <>
      <Tabs size={size} centered>
        {firstComponent && (
          <TabPane tab={firstTab} key={firstKey}>
            {firstComponent}
          </TabPane>
        )}
        {secondComponent && (
          <TabPane tab={secondTab} key={secondKey}>
            {secondComponent}
          </TabPane>
        )}
      </Tabs>
    </>
  );
};

export default NavTabs;
