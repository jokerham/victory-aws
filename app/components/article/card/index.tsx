import { PropsWithChildren } from "react";

type IArticleCardProps = {
  className? :string | null;
}

export default function ArticleCard(props: PropsWithChildren<IArticleCardProps>) {
  let inheritedClassName = "page-body__card" + (props.className ? " " + props.className : "");
  return (
    <div className={inheritedClassName}>
      {props.children}
    </div>
  )
}