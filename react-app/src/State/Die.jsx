function Die({ num, bgcolor = "slateblue" }) {

    return (
        <div className={`p-2 border flex rounded text-white bg-[${bgcolor}]`}>
            {num}
        </div>
    )
}

export default Die;