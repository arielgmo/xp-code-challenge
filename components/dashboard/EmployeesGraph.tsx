import React from 'react';
import { Card, Flex } from 'antd';
import Text from 'antd/lib/typography/Text';
import { IEmployee } from '@/utils/employees_interface';
import { Pie } from '@ant-design/plots';

function sortDepartmentsByEmployees(employees: IEmployee[]) {
  //could use type instead of any if had list of possible departments
  const listOfDeparments: any = {};
  employees.map((employee) => {
    const department = employee.department;
    if (!!listOfDeparments[department]) {
      return (listOfDeparments[department] = listOfDeparments[department] + 1);
    }
    return (listOfDeparments[department] = 1);
  });
  return Object.keys(listOfDeparments).map((deparmentName) => ({
    type: deparmentName,
    value: listOfDeparments[deparmentName],
  }));
}

interface Props {
  employeesList: IEmployee[];
}

function EmployeesGraph({ employeesList }: Props) {
  const listOfDepartments = sortDepartmentsByEmployees(employeesList);
  console.log(listOfDepartments);

  return (
    <Card className="w-1/4 mr-7">
      <Flex vertical className="h-1/5">
        <Text className="text-lg text-gray-700">Employees by department</Text>
        <Text className="text-gray-500">Departments</Text>
      </Flex>
      <Pie
        data={listOfDepartments}
        angleField="value"
        colorField="type"
        label={{
          text: 'value',
          content: '{value}',
          style: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 12,
          },
        }}
        interactions={[{ type: 'element-selected' }, { type: 'element-active' }]}
        legend={{
          color: {
            title: false,
            position: 'bottom',
            rowPadding: 2,
            fontColor: 'blue',
          },
        }}
        containerStyle={{ maxHeight: '20rem' }}
      />
    </Card>
  );
}

export default EmployeesGraph;
