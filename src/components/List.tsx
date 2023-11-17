interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="list-group list-group-flush">
        {items.map( (item, idx) => (
              <li className="list-group-item" key={idx}>{item}</li>
        ))
        }
    </ul>
  );
};

export default List;
