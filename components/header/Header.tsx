import React from 'react';
import { Avatar, Flex } from 'antd';
import Text from 'antd/lib/typography/Text';
import { UserOutlined } from '@ant-design/icons';

function Header() {
  return (
    <Flex
      className="m-7 px-4 bg-header-blue min-h-16 rounded-md"
      justify="space-between"
      align="center"
    >
      <Flex justify="space-between" align="center" className="pl-6">
        <Text className="text-2xl text-white mr-14" strong>
          LOGO
        </Text>
        <Flex justify="space-between" align="center">
          <Text className="text-base text-white mx-7">Menu</Text>
          <Text className="text-base text-white mx-7">Menu</Text>
          <Text className="text-base text-white mx-7">Menu</Text>
          <Text className="text-base text-white mx-7">Menu</Text>
        </Flex>
      </Flex>
      <Flex justify="flex-end" className="max-w-full">
        <Avatar size={34} icon={<UserOutlined />} />
      </Flex>
    </Flex>
  );
}

export default Header;
