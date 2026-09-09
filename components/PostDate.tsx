import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export type PostDateFormat = "long" | "short" | "monthDay";

const patterns: Record<PostDateFormat, string> = {
    long: "MMMM d, yyyy",
    short: "MMM d, yyyy",
    monthDay: "MMM d",
};

type PostDateProps = {
    date: string;
    className: string;
    format?: PostDateFormat;
};

const PostDate = ({ date, className, format = "long" }: PostDateProps) => (
    <time dateTime={date} className={className}>
        {formatInTimeZone(parseISO(date), "UTC", patterns[format])}
    </time>
);

export default PostDate;
