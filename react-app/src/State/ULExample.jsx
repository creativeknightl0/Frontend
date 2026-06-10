export default function ULExample() {
    const tvShowsList = [
        {id: 1, showName: 'Silicon Valley'},
        {id: 2, showName: 'Pluribus'},
        {id: 3, showName: 'Skins'}
    ]
    
    return (
        <ul>
            {tvShowsList.map(list => {
                return (
                    <li>{list.showName}</li>
                )
            })}
        </ul>
    )
}