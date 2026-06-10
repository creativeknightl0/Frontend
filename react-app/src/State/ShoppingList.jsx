import { useState } from "react";
// import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import {v4 as uuid} from "uuid";

function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: 'Milk', quantity: 5},
        {id: uuid(), product: 'Whey Protein', quantity: 1}
    ]);

    const addItem = (item) => {
        setItems(prev => {
            return [...prev, {...item, id: uuid()}]
        })
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => {
                    return (
                        <li key={i.id}>{i.product} - {i.quantity}</li>
                    )
                })}
            </ul>
            {/* <ShoppingListForm addItem={addItem} /> */}
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    )
}

export default ShoppingList;