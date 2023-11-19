"use client"
import { Card, Title, BarChart, Text } from "@tremor/react";
import React from 'react'
import Image from 'next/image';
import 'src/app/_components/Data.css'
import utrinki from 'src/imiges/02.jpg'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Graf_ena from 'src/app/_components/Graf_ena'

const data = [
  {
    Month: "Jan 21",
    Failed: 2890,
    Completed: 1400,
    "In Progress": 4938,
  },
  {
    Month: "Feb 21",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  // ...
  {
    Month: "Jan 22",
    Failed: 3890,
    Completed: 2980,
    "In Progress": 2645,
  },
];
const chartdata3 = [
  {
    date: "Jan 23",
    "2022": 45,
    "2023": 78,
  },
  {
    date: "Feb 23",
    "2022": 52,
    "2023": 71,
  },
  {
    date: "Mar 23",
    "2022": 48,
    "2023": 80,
  },
  {
    date: "Apr 23",
    "2022": 61,
    "2023": 65,
  },
  {
    date: "May 23",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "Jun 23",
    "2022": 67,
    "2023": 62,
  },
  {
    date: "Jul 23",
    "2022": 60,
    "2023": 54,
  },
  {
    date: "Aug 23",
    "2022": 72,
    "2023": 49,
  },
  {
    date: "Sep 23",
    "2022": 65,
    "2023": 52,
  },
  {
    date: "Oct 23",
    "2022": 68,
    "2023": null,
  },
  {
    date: "Nov 23",
    "2022": 74,
    "2023": null,
  },
  {
    date: "Dec 23",
    "2022": 71,
    "2023": null,
  },
];

const valueFormatter = (number: number): string => {
  return `$${Intl.NumberFormat("us").format(number).toString()}`;}
function Data() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className='about'>
      <div className='container'>
      
            <Image 
            src={utrinki} 
            alt='Jebemu boga'
            />
           <div>
           <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
           </div>
           <div>
           <Card>
      <Title>Ticket Monitoring</Title>
      <Text>Tickets by Status</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Completed", "In Progress", "Failed"]}
        colors={["sky", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        stack={true}
      />
          </Card>
           </div>
      </div>
      <Card>
        <Title>Closed Pull Requests</Title>
        <BarChart
          className="mt-6"
          data={chartdata3}
          index="date"
          categories={["2022", "2023"]}
          colors={["neutral", "indigo"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
      <pre>{JSON.stringify(value)}</pre>
      
    </div>
    </LocalizationProvider>
  
  )
  
}

export default Data
