import React from "react";

export default function DateTimePrettyHocFunc(WrappedComponent, date) {
  const timeDifference = (new Date() - new Date(date)) / 1000 / 60;

  let prettyDate;

  const timeStampFunction = (time, type) => {
    time = String(time);

    if (time[time.length - 1] === "1") {
      return type === "day"
        ? " день назад"
        : type === "hour"
        ? " час назад"
        : " минуту назад";
    } else if (["2", "3", "4"].includes(time[time.length - 1])) {
      return type === "day"
        ? " дня назад"
        : type === "hour"
        ? " часа назад"
        : " минуты назад";
    } else {
      return type === "day"
        ? " дней назад"
        : type === "hour"
        ? " часов назад"
        : " минут назад";
    }
  };

  if (timeDifference / 60 / 24 > 1) {
    prettyDate = Math.round(timeDifference / 60 / 24);
    prettyDate = String(prettyDate) + timeStampFunction(prettyDate, "day");
  }
  if (timeDifference / 60 <= 24 && timeDifference / 60 > 1) {
    prettyDate = Math.round(timeDifference / 60);
    prettyDate = String(prettyDate) + timeStampFunction(prettyDate, "hour");
  }
  if (timeDifference / 60 <= 1) {
    prettyDate = Math.round(timeDifference);
    prettyDate = String(prettyDate) + timeStampFunction(prettyDate, "minute");
  }

  class DateTimePretty extends React.Component {
    render() {
      return <WrappedComponent date={prettyDate} />;
    }
  }
  return DateTimePretty;
}
