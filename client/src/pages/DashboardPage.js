import React from 'react';
import loadable from '@loadable/component';
import { Space, Spin } from 'antd';
import HeadHelmet from '../utils/HeadHelmet';

const Tabs = loadable(() => import('../components/Tabs/NavTabs'), {
  fallback: (
    <div style={{ textAlign: 'center' }}>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  ),
});
const Donations = loadable(() => import('../components/Forms/Donations'));
const Requests = loadable(() => import('../components/Forms/Requests'));

const DashboardPage = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <HeadHelmet
        title='Dashboard • Lebanon Freecycle'
        description='This page contains two tabs, a tab for donation form and another tab
for requests form'
        url='https://www.lebanon-freecycle.live/dashboard'
      />

      <Tabs
        firstTab='Donate'
        firstKey='Donations'
        firstComponent={<Donations />}
        secondTab='Request'
        secondKey='Requests'
        secondComponent={<Requests />}
        size='large'
        border={true}
        animated={false}
      />
    </div>
  );
};

export default DashboardPage;
