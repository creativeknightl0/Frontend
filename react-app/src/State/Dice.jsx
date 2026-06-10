import Die from "./Die";

function Dice({ arrNum, color }) {

    return (
        <div className="p-2 flex border border-black gap-2">
            {arrNum.map((a, i) => {
                return (
                    <div key={i}>
                        <Die num={a} bgcolor={color} />
                    </div>
                )
            })}
        </div>
    )
}

export default Dice;