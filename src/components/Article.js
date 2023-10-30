import DateTimePrettyHocFunc from "./DateTimePrettyHocFunc";
import DateTime from "./DataTimeFunc";

export default function Article(props) {
  const DateTimePretty = DateTimePrettyHocFunc(DateTime, props.date);

  return (
    <div className="item item-article">
      <h3>
        <a href="https://#0/">
          {props.title}
        </a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
      {<DateTimePretty />}
    </div>
  );
}
