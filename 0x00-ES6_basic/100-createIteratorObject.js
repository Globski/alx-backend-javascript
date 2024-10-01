export default function createIteratorObject(report) {
  const employees = [];
  const { hasOwnProperty } = Object.prototype;

  for (const department in report.allEmployees) {
    if (hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
