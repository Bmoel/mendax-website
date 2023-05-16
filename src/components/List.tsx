interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="list-group list-group-flush">
        {items.map( (item) => (
              <li className="list-group-item">{item}</li>
        ))
        }
    </ul>
  );
};

export default List;
