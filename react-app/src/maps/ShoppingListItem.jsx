export default function ShoppingListItem({ id, item, isCompleted, quantity }) {
    return (
        <li key={id} style={{color: isCompleted ? 'green' : 'red', textDecoration: isCompleted ? 'line-through' : 'none'}}>{item} - {quantity}</li>
    )
}