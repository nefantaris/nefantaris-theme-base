import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

type PostDateProps = {
    date: string;
    className: string;
};

const PostDate = ({ date, className }: PostDateProps) => (
    <time dateTime={date} className={className}>
        {formatInTimeZone(parseISO(date), "UTC", "MMMM d, yyyy")}
    </time>
);

export default PostDate;
