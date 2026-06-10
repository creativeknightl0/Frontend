export default function Heading({ colorName, name }) {
    console.log(colorName);
    console.log(typeof(colorName))
    return (
        <h1 style={{color: colorName}}>
            {name}
        </h1>
    )
}