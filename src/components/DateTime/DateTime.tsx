import {
  formatDate,
  datetime_format,
  readable_format,
} from "../../helpers/formatDate";

import css from "./DateTime.module.scss";

interface IDateTimeProps {
  date: string;
}
const DateTime = ({ date }: IDateTimeProps): JSX.Element => {
  return (
    <time className={css.datetime} dateTime={formatDate(date, datetime_format)}>
      {formatDate(date, readable_format)}
    </time>
  );
};

export default DateTime;
