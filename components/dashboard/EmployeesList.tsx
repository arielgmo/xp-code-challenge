'use client';
import React, { useEffect } from 'react';
import { Card, Flex, List, Avatar } from 'antd';
import Text from 'antd/lib/typography/Text';
import ListItem from 'antd/lib/list/Item';
import moment from 'moment';
import { IEmployee } from '@utils/employees_interface';

function EmployeesListItem(item: IEmployee) {
  const lastLoginDate = moment(item.lastLogin);
  return (
    <ListItem>
      <Flex align="center" className="w-2/5">
        <Avatar size={20} icon={<img src={item.avatar} />} />
        <Flex className="ml-2" vertical>
          <Text className="text-xs">{item.employee}</Text>
          <Text className="text-xs text-gray-600">{item.mail}</Text>
        </Flex>
      </Flex>
      <Text className="w-1/5 text-xs">{lastLoginDate.format('MMMM D, YYYY')}</Text>
      <Text className="w-1/5 text-xs">{item.department}</Text>
      <Text
        className={`
          w-1/5 text-xs font-semibold
          ${item.isActive ? 'text-green-500' : 'text-red-500'}
        `}
      >
        {item.isActive ? 'Active' : 'Inactive'}
      </Text>
    </ListItem>
  );
}

function EmployeesListHeader() {
  return (
    <Flex justify="space-between" className="py-0">
      <Text className="text-base text-gray-600 w-2/5 font-semibold">Employee</Text>
      <Text className="text-base text-gray-600 w-1/5 font-semibold">Last Login</Text>
      <Text className="text-base text-gray-600 w-1/5 font-semibold">Department</Text>
      <Text className="text-base text-gray-600 w-1/5 font-semibold">Status</Text>
    </Flex>
  );
}

interface Props {
  employeesList: IEmployee[];
}

function EmployeesList({ employeesList }: Props) {
  return (
    <Card className="w-3/4">
      <Text className="text-lg text-gray-700">Employees</Text>
      <Card className="my-4 py-0 h-80 overflow-y-scroll">
        <List
          header={<EmployeesListHeader />}
          dataSource={employeesList}
          renderItem={EmployeesListItem}
        />
      </Card>
    </Card>
  );
}

export default EmployeesList;
