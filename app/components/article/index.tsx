import { PropsWithChildren } from "react";

type IArticleCard = {
  className? :string | null;
}

export default function Article(props: PropsWithChildren<IArticleCard>) {
  let inheritedClassName = "page-body" + (props.className ? " " + props.className : "");
  return (
    <div className={inheritedClassName}>
      {props.children}
    </div>
  )
}