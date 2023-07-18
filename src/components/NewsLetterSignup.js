import classes from "./NewsLetterSignup.module.css";
import classnames from "classnames";
const NewsLetterSignup = () => {
  return (
    <form className={classnames(classes.form)}>
      <input type="email" placeholder="Signup for NewsLetter..." />
      <button>Signup</button>
    </form>
  );
};
export default NewsLetterSignup;
