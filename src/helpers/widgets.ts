export function generateRandomDataForPieWidget() {
  const randomValue = () => Math.floor(Math.random() * 1000);

  const groups = [
    "Group A",
    "Group B",
    "Group C",
    "Group D",
    "Group E",
    "Group F",
  ];

  const pieData01 = groups.map((group) => ({
    name: group,
    value: randomValue(),
  }));

  const pieData02 = groups.map((group) => ({
    name: group,
    value: randomValue(),
  }));

  return { pieData01, pieData02 };
}

export function generateRandomDataForLineWidget() {
  const randomValue = () => Math.floor(Math.random() * 5000);

  const dates = ["10.01", "10.02", "10.03", "10.04", "10.05"];

  return dates.map((date) => ({
    name: date,
    value1: randomValue(),
    value2: randomValue(),
  }));
}

export function generateRandomDataForFunnelWidget() {
  const randomValue = () => Math.floor(Math.random() * 100);

  const items = [
    { name: "Donut", fill: "#8884d8" },
    { name: "French fries", fill: "#83a6ed" },
    { name: "Burger", fill: "#8dd1e1" },
    { name: "Cheeseburger", fill: "#82ca9d" },
    { name: "Water", fill: "#a4de6c" },
  ];

  return items.map((item) => ({
    value: randomValue(),
    name: item.name,
    fill: item.fill,
  }));
}
