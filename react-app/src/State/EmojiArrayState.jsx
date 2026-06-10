import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiArrayState() {
    // const [emoji, setEmoji] = useState(['😊']);
    // To avoid the key prop issue we will use array of objects with unique id
    const [emoji, setEmoji] = useState([{id: uuid(), emoji: '😊'}]);

    const addNewEmoji = () => {
        // setEmoji([...emoji, '😒']);  // 1st way
        // setEmoji((oldEmojis) => {    // 2nd way
        //     return [...oldEmojis, '😒'];
        // })
        // setEmoji(oldEmojis => [...oldEmojis, '😒']);  // 3rd way
        setEmoji(oldEmojis => [...oldEmojis, {id: uuid(), emoji: '😒'}]);
    } 

    const deleteEmoji = (id) => {
        const newCorrectEmojiArray = emoji.filter((e) => e.id != id);
        setEmoji(newCorrectEmojiArray);
    }
    
    return (
        <div className="mt-2">
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={addNewEmoji}>Add Emoji</button>
            <div className="flex">
                {emoji.map((e) => {
                    return (
                        <p key={e.id} onClick={() => deleteEmoji(e.id)}>
                            {e.emoji}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}