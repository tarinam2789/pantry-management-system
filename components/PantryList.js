// components/PantryList.js
"use client"; // Ensure this component runs on the client side if using hooks

const PantryList = ({ items, deleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Quantity: {item.quantity}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PantryList;

