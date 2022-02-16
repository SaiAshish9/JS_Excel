const XLSX = require("xlsx");

const students = [
  { name: "Sai", email: "sai@gmail.com", age: 23, gender: "M" },
  { name: "Sai9", email: "sai9@gmail.com", age: 15, gender: "M" },
];

const convertJsonToExcel = (data) => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "students");
  XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workBook, "test.xlsx");
};

// function send_aoa_to_client(data, bookType = "xlsx", req = null, res = null) {
//     var ws = XLSX.utils.aoa_to_sheet(data);
//     var wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
//     var buf = XLSX.write(wb, { type: "buffer", bookType: bookType || "xlsx" });
//     console.log(buf);
//   //   res.send(buf).status(200);
//   }

convertJsonToExcel(students);
// send_aoa_to_client(students);
