import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header, Button } from '../components';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-6 md:p-10 bg-blue-100 dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="App" title="Project Kanban Board" />
    <div className="flex justify-between items-center mb-5">
      <div className="text-lg font-semibold text-gray-700">
        Tasks Overview
      </div>
      <Button
        color="white"
        bgColor="#4caf50"
        text="Add New Task"
        borderRadius="10px"
        className="p-2"
      />
    </div>
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      className="bg-white rounded-lg shadow-md"
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
