export default function PropertyListItem({ id, name, address, rating, price }) {
    return (
        <div style={{border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', borderRadius: '16px'}}>
            <h2>{name}</h2>
            <h3>{address}</h3>
            <p>{rating} ⭐</p>
            <p>${price} a night</p>
        </div>
    )
}