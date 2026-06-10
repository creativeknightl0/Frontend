import { useState } from "react";

function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({product: '', quantity: 0});
    const [isProductValid, setIsProductValid] = useState(false);

    const handleFormData = (e) => {
        if(e.target.value.length === 0) {
            setIsProductValid(false);
        }
        else {
            setIsProductValid(true);
        }

        setFormData(prevData => {
            return (
                {...prevData,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(formData.product.length === 0) { setIsProductValid(false); return; }

        addItem(formData);
        setFormData({product: '', quantity: 0})
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>The product is {formData.product} and quantity of it is {formData.quantity}</p>

            <label htmlFor="product">Product: </label>
            <input type="text" name="product" id="product" value={formData.product} onChange={handleFormData} />
            {!isProductValid && <p className="text-red-500">Product field cannot be empty</p>}

            <label htmlFor="quantity">Quantity: </label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleFormData} />

            <button>Add Item +</button>
        </form>
    )
}

export default ValidatedShoppingListForm;