import DateTimePrettyHocFunc from "./DateTimePrettyHocFunc";
import DateTime from "./DataTimeFunc";

export default function Video(props) {
  const DateTimePretty = DateTimePrettyHocFunc(DateTime, props.date);
  return (
    <div className="item">
      <iframe
        title={props.title}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
      {<DateTimePretty />}
    </div>
  );
}
