import ItemFilters from "../ItemFilters/ItemFilters";
import css from "../ListFilters/ListFilters.module.css"

export default function ListFilters({list}) {
  const { engine, transmission, kitchen, AC, bathroom, TV, radio, refrigerator, microwave, gas, water} = list;

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

    const listIcons = {
      engine: "#icon-gas",
      transmission: "#icon-diagram",
      kitchen: "#icon-cafe",
      AC: "#icon-wind",
      bathroom: "#icon-aqua",
      TV: "#icon-tv",
      radio: "#icon-list",
      refrigerator: "#icon-refrigerator",
      microwave: "#icon-microwawe",
      gas: "#",
      water: "#icon-aqua"
    };
  
    const array = Object.entries(categories).filter(([key, value]) => value);
  
    return (
      <>
        <ul className={css.listFilter}>
          {array.map(([key, value]) => {
                  const icons = listIcons[key];

                  const title = key === "transmission" || key === "engine" ? value : key;

                  return (
                    <li key={key}>
                      <ItemFilters categorie={title} icon={icons} />
                    </li>
                  )
              })}
        </ul>
      </>
    );
  }
  