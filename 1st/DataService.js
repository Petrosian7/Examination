class DataService {
  constructor(data) {
    this.data = data;
  }

  groupDataKey(key) {
    const groupedData = {};

    this.data.forEach((entry) => {
      const groupKey = entry[key];

      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }

      groupedData[groupKey].push(entry);
    });

    return groupedData;
  }
}

const data = [
  { name: "Edgar", age: 21, city: "Talish" },
  { name: "Gor", age: 30, city: "Noragyux" },
  { name: "Anahit", age: 25, city: "Erevan" },
  { name: "Davit", age: 30, city: "Vanadzor" },
];

const dataService = new DataService(data);
const groupedDataAge = dataService.groupDataKey("age");
console.log(groupedDataAge);
