// export default function ClickerEvents() {
//     function handleClickEvent() {
//         console.log('JSX is the new way');
//     }
    
//     return (
//         // <button addEventListener('onClick', () => {console.log('js')})>OK</button> - error
//         <button onClick={handleClickEvent}>OK JSX</button>
//     )
// }

export default function ClickerEvents({buttonText, consolePrint}) {
    function handleClickEvent() {
        console.log(`${consolePrint}`);
    }
    
    return (
        // <button addEventListener('onClick', () => {console.log('js')})>OK</button> - error
        <button onClick={handleClickEvent}>{buttonText}</button>
    )
}