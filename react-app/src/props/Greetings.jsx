// export default function Greetings(props) {
//     console.log(props.person);
//     return <h1>{props.person}</h1>
// }

// destructuring props
// export default function Greetings({ person }) {
//     console.log(person);
//     return <h1>{person}</h1>
// }

// default values for props
export default function Greetings({ person = "None", address = "Somewhere" }) {
    console.log(person);
    console.log(address);
    return <h1>{person} from {address}</h1>
}