export default function parseTaskData(data: any) {
  return Object.keys(data || {}).map(key => ({
    id: key,
    task: data[key].task,
    isChecked: data[key].complete,
  }));
}
