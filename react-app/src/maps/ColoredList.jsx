export default function ColoredList({ data }) {
    return (
        <ul>
            {data.map(d => <li key={d.id} style={{color: d.color}}>{d.color}</li>)}
        </ul>
    )
}