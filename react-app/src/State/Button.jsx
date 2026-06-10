function Button({ text = "Button", clickFunc }) {
    return (
        <button onClick={clickFunc} className="border border-black p-2 rounded-md cursor-pointer">{text}</button>
    )
}

export default Button;