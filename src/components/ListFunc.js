import Video from "./VideoFunc";
import Article from "./Article";
import Popular from "./PopularFunc";
import New from "./NewFunc";

export default function List(props) {
  return props.list.map((item) => {
    let change;
    switch (item.type) {
      case "video":
        change = <Video {...item} />;
        break;
      case "article":
        change = <Article {...item} />;
        break;
      default:
        return null;
    }

    return item.views > 1000 ? (
      <Popular>{change}</Popular>
    ) : item.views < 100 ? (
      <New>{change}</New>
    ) : (
      change
    );
  });
}
