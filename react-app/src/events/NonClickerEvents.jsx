export default function NonClickerEvents() {
    function handleMouseHover() {
        console.log('I am dancing JS see');
    }
    
    return (
        <p onMouseOver={handleMouseHover}>Dance JSX</p>
    )
}