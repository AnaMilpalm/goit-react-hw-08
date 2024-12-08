import s from "./SearchBox.module.css";
import { setSearchContact } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchContact(e.target.value));
  };
  return (
    <div className={s.filterBox}>
      <label className={s.label}>Find contacts by name</label>
      <input className={s.input} type="text" onChange={handleChange} />
    </div>
  );
};
export default SearchBox;
