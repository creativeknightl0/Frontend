import PropertyListItem from "./PropertyListItem"

export default function PropertyList({ data }) {
    return (
        <div style={{display: 'flex', gap: '24px', justifyContent: 'center', padding: '16px'}}>
            {data.map(d => <PropertyListItem key={d.id} {...d} />)}
        </div>
    )
}