import s from './Filter.module.css';
const Filter = ( {value, onFilter} ) => {
    return (
        <div className={s.filterBox}>
            <label className={s.label}>Find contacts by name</label>
            <input className={s.input} type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </div>
    )
}
export default Filter;