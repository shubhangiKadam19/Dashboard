import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header, Button } from '../components';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState(null);

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-blue-100 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Project Scheduler" />
      <div className="flex justify-between items-center mb-5">
        <PropertyPane>
          <DatePickerComponent
            value={new Date(2021, 0, 10)}
            showClearButton={false}
            placeholder="Select Date"
            floatLabelType="Always"
            change={change}
            className="bg-gray-200 p-2 rounded-md shadow-md"
          />
        </PropertyPane>
        <Button
          color="white"
          bgColor="#4caf50"
          text="Add New Event"
          borderRadius="10px"
          className="p-2"
        />
      </div>
      <div className="flex justify-between items-center bg-blue-200 p-5 rounded-lg shadow-md mb-5">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Upcoming Deadlines</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-600">Project Alpha - Due: 2024-06-10</li>
            <li className="text-gray-600">Project Beta - Due: 2024-06-15</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Team Members</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-600">John Doe - Lead Developer</li>
            <li className="text-gray-600">Jane Smith - Project Manager</li>
          </ul>
        </div>
      </div>
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
        className="mt-5 bg-white rounded-lg shadow-md"
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
