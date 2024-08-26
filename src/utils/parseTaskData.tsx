export default function parseTaskData(data: any) {
  if (!data) return [];
  return Object.keys(data).map(key => ({
    //bu fonk db den gelen json tipli veriyi arraya cevırmek icin
    //object.key -> keyleri array yapısınd return eder
    id: key,
    task: data[key].task,
    isChecked: data[key].complete,
  }));
}
