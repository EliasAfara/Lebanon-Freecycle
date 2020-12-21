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
  border,
  animated,
}) => {
  const { TabPane } = Tabs;
  if (!size) {
    size = 'default';
  }
  return (
    <>
      <Tabs
        size={size}
        centered
        tabBarStyle={{
          border: `${border ? 0 : 1}`,
        }}
        tabPosition='top'
        animated={{ inkBar: true, tabPane: animated }}
      >
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
