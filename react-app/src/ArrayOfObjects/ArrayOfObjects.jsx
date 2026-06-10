export default function ArrayOfObjects() {
    const shoppingList = [
        {id: 1, itemName: 'Power Balance Bracelet', price: '1350'},
        {id: 2, itemName: 'Notebook', price: 200},
        {id: 3, itemName: 'Watch', price: 3000}
    ];

    console.log(shoppingList);

    const addItemToShoppingList = [...shoppingList, {id: 4, itemName: 'TV', price: 30000}];
    console.log(addItemToShoppingList);

    const filterSecondItem = shoppingList.filter((sh) => {
        return sh.id !== 2;
    })

    console.log(filterSecondItem);

    const changeToAllObjects = shoppingList.map(sh => {
        return {...sh, itemName: sh.itemName.toLowerCase()};
    })

    console.log(changeToAllObjects);

    const modifyOneElementOfObject = shoppingList.map(sh => {
        if(sh.id === 3) {
            return {...sh, price: 1500}
        }
        else {
            return sh
        }
    }); 

    console.log(modifyOneElementOfObject);
    
    return (
        <div>
            {shoppingList.map(sh => {
                return (
                    <p key={sh.id}>
                        {sh.itemName} - {sh.price}
                    </p>
                )
            })}
        </div>
    );
}