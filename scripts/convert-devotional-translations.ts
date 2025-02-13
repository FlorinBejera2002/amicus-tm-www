const fs = require("fs");
const path = require("path");

const fileName = "devotional.ro.json";
const filePath = path.join(__dirname, `../messages/${fileName}`);

interface JsonData {
  week: string;
  day: string;
  [key: string]: any;
}

const getWeekdayNumberEn = (day: string): number => {
  const daysEn: { [key: string]: number } = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const daysRo: { [key: string]: number } = {
    duminică: 0,
    luni: 1,
    marți: 2,
    miercuri: 3,
    joi: 4,
    vineri: 5,
    sâmbătă: 6,
  };

  if (
    ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"].includes(
      day.toLowerCase()
    )
  ) {
    return daysRo[day.toLowerCase()];
  }

  return daysEn[day.toLowerCase()];
};

const getKey = (item: JsonData): string => {
  let week = item.week.toString().toLowerCase().split(" ").join("-");
  if (week.includes("săptămâna")) {
    week = week.replace("săptămâna", "week");
  }
  const day = "day-" + getWeekdayNumberEn(item.day.toString().toLowerCase());
  return `${week}_${day}`;
};

fs.readFile(filePath, "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    const jsonData: JsonData[] = JSON.parse(data);

    const newObject: { [key: string]: JsonData } = {};
    for (const item in jsonData) {
      const key = getKey(jsonData[item]);
      newObject[key] = jsonData[item];
    }

    console.log("***newObject 👉", newObject);

    fs.writeFile(
      filePath,
      JSON.stringify(newObject, null, 2),
      (writeErr: NodeJS.ErrnoException | null) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return;
        }
        console.log("File successfully updated with new content.");
      }
    );
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
