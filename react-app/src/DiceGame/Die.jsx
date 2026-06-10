import './Die.css';

export default function Die() {
    const rand = Math.floor(Math.random() * 6) + 1;

    return (
        <p className="die">The die no: {rand}</p>
    )
}