import {hubList, hubRes, hubTimetableData} from "./DataSet";

const getDataOrNot = (hubId, result) => (hubId === 1 ? result : []);

export function getHubs() {
  console.log(`fetch: api/hubs`)
  return new Promise((resolve) => resolve({data: hubList}))
}

export function getDashboardData(hubId) {
  console.log(`fetch: /api/table/${hubId}/`);
  return new Promise((resolve) => resolve({data: getDataOrNot(hubId, hubRes)}))
}

export function getTimeboardData(hubId, selectedDate) {
  const config = new URLSearchParams({date: selectedDate.format('DD-MM-YYYY')});
  console.log(`fetch: /Dashboard/timetable/${hubId}/` + config)
  return new Promise((resolve) => resolve({data: getDataOrNot(hubId, hubTimetableData(selectedDate))}))
}
