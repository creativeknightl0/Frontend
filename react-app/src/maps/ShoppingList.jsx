import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({ data }) {
    // console.log(data);
    // 1. out map
    // const mapData = data.map(d => <li>{d.item} - {d.quantity}</li>);

    return (
        <ol>
            {/* {mapData} */}

            {/* 2. In map */}
            {/* {data.map(d => <li style={{color: d.isCompleted ? 'green' : 'red'}}>{d.item} - {d.quantity}</li>)} */}

            {/* 3. With key prop */}
            {/* {data.map(d => <li key={d.id} style={{color: d.isCompleted ? 'green' : 'red', textDecoration: d.isCompleted ? 'line-through' : 'none'}}>{d.item} - {d.quantity}</li>)} */}

            {/* 4. Breaking bigger component into small components */}
            {data.map(d => <ShoppingListItem key={d.id} {...d} />)}
        </ol>
    )
}