import { MouseEvent, useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  /* let selectedIndex = 0; */
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*  arr[0] // variable(selectedIndex)
  arr[1] // updater function */

  /* items = []; */

  /*  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
 */
  //event handler
  /* const handleClick = (e: MouseEvent) => console.log(e); */

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            /* onClick={() => console.log("Clicked:" + " " + item, index)} */
            /* onClick={(e) => console.log(e)} */
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
