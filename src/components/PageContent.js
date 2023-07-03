import classes from "./PageContent.module.css";
import classnames from "classnames";

const PageContent = (props) => {
  return (
    <div className={classnames(classes.content)}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
export default PageContent;
