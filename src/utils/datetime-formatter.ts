import { format, parseISO } from "date-fns";

const mysqlDateFormatter = (date: Date): string => {
  return format(date, "yyyy-MM-dd HH:MM:ss");
};
export { mysqlDateFormatter };

//format to readable string from universal time coordinated
const formatUTC = (date: string): string => {
  let d = parseISO(date);
  return format(d, "dd/MM/yy HH:MM:ss");
};
export { formatUTC };
