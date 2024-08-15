export default function parseTaskData(data: any) {
  return Object.keys(data).map(key => ({
    //bu fonk db den gelen json tipli veriyi arraya cevırmek icin
    id: key, //object.key -> keyleri array yapısınd return eder
    task: data[key].task,
    isChecked: data[key].complete,
  }));
}
