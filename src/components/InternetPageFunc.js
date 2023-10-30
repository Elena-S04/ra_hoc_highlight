import List from "./ListFunc";
import { useState } from "react";

export default function InternetPage() {
  const [list] = useState([
    {
      title: "flamingo",
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
      views: 50,
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      date: "2023-05-18 13:24:00",
      views: 175,
    },
    {
      title: "aquarium",
      type: "video",
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
      views: 12,
    },
    {
      type: "article",
      title: "Секретные данные были раскрыты!",
      date: "2023-05-18 19:24:00",
      views: 1532,
    },
    {
      title: "beach",
      type: "video",
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
      views: 50,
    },
    {
      title: "cocadu",
      type: "video",
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
      views: 50,
    },
    {
      title: "bear",
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
      views: 4253,
    },
    {
      title: "leo",
      type: "video",
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
      views: 50,
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      date: "2022-07-31 13:24:00",
      views: 12,
    },
  ]);

  return <List list={list} />;
}
