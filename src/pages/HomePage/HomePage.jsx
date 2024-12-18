import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

import css from "./HomePage.module.css";
const Home = () => {
  return (
    <div className={css.heading}>
      <div className={css.boxMainTitle}>
        <h1 className={css.mainTitle}>Phone book</h1>
      </div>
      <span>
        <FaMagnifyingGlassArrowRight className={css.icon} size="100" />
      </span>
    </div>
  );
};

export default Home;
