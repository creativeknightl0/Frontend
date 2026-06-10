import { useState } from "react"

function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({product: '', quantity: 0});

    const handleChange = (e) => {
        setFormData(curr => {
            return (
                {...curr,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: '', quantity: 0});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>The product is {formData.product} & quantity is {formData.quantity}</p>

            <label htmlFor="product">Product name:</label>
            <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} />

            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />

            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;