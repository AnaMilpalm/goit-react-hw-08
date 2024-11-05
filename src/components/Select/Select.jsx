import { useId, useState} from 'react';
const LangSwitcher = () => {
    const selectId = useId();
    const [lang, setLang] = useState("uk");
  
    return (
      <div>
        <label htmlFor={selectId}>Choose language</label>
        <select
          id={selectId}
          value={lang}
          onChange={(evt) => setLang(evt.target.value)}
        >
          <option value="uk">Ukrainian</option>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    );
  };
  
  export default LangSwitcher;

  export const RadioButton = () => {
    const [coffeeSize, setCoffeeSize] = useState("sm");
  
    const handleSizeChange = (evt) => {
      setCoffeeSize(evt.target.value);
    };
  
    return (
      <>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
            onChange={handleSizeChange}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </>
    );
  };
  
  export const CheckBox = () => {
    const [hasAccepted, setHasAccepted] = useState(false);
  
    const handleChange = (evt) => {
      setHasAccepted(evt.target.checked);
    };
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </div>
    );
  };
  