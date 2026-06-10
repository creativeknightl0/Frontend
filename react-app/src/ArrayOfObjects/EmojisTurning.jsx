import { useState } from "react";
import {v4 as uuid} from 'uuid';

export default function EmojisTurning() {
    const [emojis, setEmojis] = useState([
        {id: uuid(), emoji: '😊'},
        {id: uuid(), emoji: '😒'}
    ]);

    const generateEmoji = () => {
        const emojisArr = ['⭐', '🔊', '🎶', '😍', '❌'];
        const randEmoji = Math.floor(Math.random() * emojisArr.length);

        console.log(emojisArr[randEmoji]);

        return emojisArr[randEmoji];
    }

    const addEmojis = () => {
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: generateEmoji()}]);
    }

    const turnThem = () => {
        setEmojis(oldEmojis => {
                return oldEmojis.map(e => {
                    return {...e, emoji: '❤️'}
                })
        })
    }

    return (
        <>
            <div className="flex">
                {emojis.map(e => {
                    return (
                        <p key={e.id}>
                            {e.emoji}
                        </p>
                    )
                })}
            </div>
            
            <div className="flex gap-2">
                <button className='border border-black p-2 rounded-md cursor-pointer' onClick={turnThem}>Turn</button>
                <button className="border border-black p-2 rounded-md cursor-pointer" onClick={addEmojis}>Add Emoji +</button>
            </div>
        </>
    )
}