export default function ListFilters({list}) {
  const { engine, transmission, kitchen, AC, bathroom, TV, radio, refrigerator, microwave, gas, water} = list;
  console.log(AC)
    const categories = {
      engine,
      transmission,
      kitchen,
      AC,
      bathroom,
      TV,
      radio,
      refrigerator,
      microwave,
      gas,
      water,
    };
  
    // Фільтрація категорій, де значення істинне
    const array = Object.entries(categories).filter(([key, value]) => value);
    console.log(array)
  
    return (
      <>
        <ul>
          {array.map(([key, value]) => {
                  const title = key === "transmission" || key === "engine" ? value : key;

                  return (
                    <li key={key}>
                      {title}
                    </li>
                  )
              })}
        </ul>
      </>
    );
  }
  