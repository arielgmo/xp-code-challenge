'use client';
import React, { useEffect } from 'react';
import { Flex, Breadcrumb } from 'antd';
import Text from 'antd/lib/typography/Text';
import EmployeesGraph from './EmployeesGraph';
import EmployeesList from './EmployeesList';
import { mockData } from '@/mock-data';
import { IEmployee } from '@/utils/employees_interface';

function Dashboard() {
  const [employeesData, setEmployeesData] = React.useState<IEmployee[] | []>([]);

  useEffect(() => {
    //TODO: set api file and mock library
    setTimeout(() => {
      console.log('Fetching userData');
    }, 2000);
    console.log('Data Fetched');
    setEmployeesData(mockData);
  }, []);

  return (
    <Flex className="mx-7 w-full mb-7" justify="flex-start" align="top" vertical>
      <Breadcrumb
        className="mb-7"
        items={[
          {
            href: '',
            title: <Text className="text-base text-gray-600">Home</Text>,
          },
          {
            href: '',
            title: <Text className="text-base text-gray-600">Reports & Insights</Text>,
          },
        ]}
      />
      <Flex className="h-[27.5rem]">
        <EmployeesGraph employeesList={employeesData} />
        <EmployeesList employeesList={employeesData} />
      </Flex>
    </Flex>
  );
}

export default Dashboard;
