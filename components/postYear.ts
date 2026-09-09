import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export const postYear = (date: string): string =>
    formatInTimeZone(parseISO(date), "UTC", "yyyy");
