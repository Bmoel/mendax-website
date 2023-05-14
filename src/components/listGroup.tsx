import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    //create selectedIdx variable with a hook function
    //this allows react to know when selectedIdx changes, so it can update DOM
    const [selectedIdx, setSelectedIndex] = useState(-1); //initialize selectedIdx to -1
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={ selectedIdx === index ? 'list-group-item active' : 'list-group-item'}
                        key={item} 
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
