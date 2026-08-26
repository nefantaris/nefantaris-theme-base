const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
});

export default function formatDate(isoDate: string): string {
    return dateFormatter.format(new Date(isoDate));
}
