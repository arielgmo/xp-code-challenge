import React from 'react';
import { Avatar, Button, Divider, Dropdown, Flex } from 'antd';
import Text from 'antd/lib/typography/Text';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const loginMenuItems: MenuProps['items'] = [
  {
    key: 'ProfileNavigation',
    label: (
      <Flex vertical>
        <Flex align="flex-start">
          <UserOutlined className="pt-1" />
          <Flex vertical justify="flex-start" className="pl-4">
            <Text>My Profile</Text>
            <Text className="text-xs text-gray-700">
              Change settings of your account.
            </Text>
          </Flex>
        </Flex>
        <Divider className="mt-2 mb-1" />
      </Flex>
    ),
  },
  {
    key: 'ProfileNavigation',
    danger: true,
    label: <Text className="text-sm">Logout</Text>,
    icon: <LogoutOutlined />,
  },
];

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
          <Button type="text">
            <Text className="text-base text-white mx-7">Menu</Text>
          </Button>
          <Button type="text">
            <Text className="text-base text-white mx-7">Menu</Text>
          </Button>
          <Button type="text">
            <Text className="text-base text-white mx-7">Menu</Text>
          </Button>
          <Button type="text">
            <Text className="text-base text-white mx-7">Menu</Text>
          </Button>
        </Flex>
      </Flex>
      <Flex justify="flex-end" className="max-w-full">
        <Dropdown menu={{ items: loginMenuItems }}>
          <Avatar size={34} icon={<UserOutlined />} />
        </Dropdown>
      </Flex>
    </Flex>
  );
}

export default Header;
