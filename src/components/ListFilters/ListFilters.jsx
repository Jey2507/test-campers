export default function ListFilters({ list: transmission, engine, kitchen, AC, bathroom, TV, radio, refrigerator, microwave, gas, water }) {
    const categories = {
      transmission,
      engine,
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
          {array.map(([key, value]) => (
            <li key={key}>
              {/* Якщо значення об'єкт або інший складний тип, потрібно уточнити, що саме відображати */}
              {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
            </li>
          ))}
        </ul>
      </>
    );
  }
  