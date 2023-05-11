import React from 'react';
import { ScheduleComponent, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      {/* Renders the Header component, which displays a title and category for the page */}
      <Header category="Page" title="Calendar" />
      <ScheduleComponent
        height="650px"
        // Sets the event data for the schedule
        eventSettings={{ dataSource: scheduleData }}
        // Sets the initial selected date for the schedule
        selectedDate={new Date(2021, 7, 2)}
      >
        {/* Injects the necessary modules to enable the required views and functionalities */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
