import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map(fruit => {
      const newFruit = {...fruit};
      if(newFruit.label===e.target.value){
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    })

    setFruits(newFruits);

    let sumVal = 0;
    newFruits.forEach(fruit=>{
      if(fruit.checked){
        sumVal = sumVal + fruit.value;
      }
    })

    setSum(sumVal);
  }
  return (
    <div>
      {fruits.map((fruit)=>{
        return (
          <div key={fruit.label}>
            <input id={fruit.label} type="checkbox" value={fruit.label} onChange={handleChange} checked={fruit.checked}/>
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
