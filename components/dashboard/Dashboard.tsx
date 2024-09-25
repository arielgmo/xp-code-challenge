import React from 'react';
import { Flex } from 'antd';
import { Breadcrumb } from 'antd';

function Dashboard() {
  return (
    <Flex className="m-7" justify="flex-start" align="top">
      <Breadcrumb
        items={[
          {
            href: '',
            title: 'Home',
          },
          {
            href: '',
            title: 'Reports & Insights',
          },
        ]}
      />
    </Flex>
  );
}

export default Dashboard;
