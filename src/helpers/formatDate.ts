const datetime_format: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const readable_format: Intl.DateTimeFormatOptions = {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Europe/Paris",
};

const regex = /\//g;

const formatDate = (date: string, options: Intl.DateTimeFormatOptions) => {
  const formatted_date = Intl.DateTimeFormat("fr", options).format(
    new Date(date)
  );

  if (!options.dateStyle) {
    return formatted_date.replace(regex, "-");
  }

  return formatted_date;
};

export { formatDate, readable_format, datetime_format };
