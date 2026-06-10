import { useState } from 'react';
import EmmaVideo from '../assets/emma-steuer-vid.mp4';
import { MessageCircle, Repeat2, Heart, ChartColumn, Bookmark, Share2 } from 'lucide-react';

export default function XTweetComponent() {
    const [retweetClicked, setRetweetClicked] = useState(false);
    const [likeBtnClicked, setLikeBtnClicked] = useState(false);
    const [retweetCnt, setRetweetCnt] = useState(10);
    const [likeCnt, setLikeCnt] = useState(211);

    const Retweet = () => {
        console.log('retweet btn clicked');
        console.log('Before set retweet:' + retweetClicked);
        setRetweetClicked(prevRetweetState => !prevRetweetState);
        console.log('after set retweet:' + retweetClicked);
        // here we have to do opposite because outside the function the boolean value is changed to true, etc but inside it is false (current), etc
        if(retweetClicked === false) {
            setRetweetCnt(prevRetweetCnt => prevRetweetCnt + 1);
        }
        else if(retweetClicked === true) {
            setRetweetCnt(prevRetweetCnt => prevRetweetCnt - 1);
        }
    }

    const like = () => {
        console.log('like called');
        console.log('before like state: ' + likeBtnClicked);
        setLikeBtnClicked(prevLikeClickedState => !prevLikeClickedState);
        console.log('after like state: ' + likeBtnClicked);
        // as outside same it turns true, but inside this function its false now also so we need to handle if else condition for counting opposite to increase or decrease like correctly for a single user
        // 1. if ofcourse the likeBtnClicked is false it should increase the count to +1 as we need behaviour just like it is true but here we will have it as false so hypothetically we see and do this way
        if(likeBtnClicked === false) {
            setLikeCnt(prevLikeCnt => prevLikeCnt + 1); // turns to 212 even if the value here was false but imagine it if it was true and do likewise
        }
        // 2. now see in next round the likeBtnClicked value will be false outside but inside its true - but we need imagine it as outside whichever value we have which is false and do like wise
        else {
            setLikeCnt(prevLikeCnt => prevLikeCnt - 1); // turns to 211 even if the value of likeBtnClicked inside function was true but we imagine outside value of false and make it behave that way
        }
    }

    return (
        <div className="p-6 border border-gray-500 flex justify-center overflow-y-auto">
            <div className="text-white flex flex-col space-y-2">
                {/* Profile Section */}
                <div className="flex space-x-2 items-center">
                    {/* Pic */}
                    <div className="w-16">
                        <img className='rounded-full' src="https://pbs.twimg.com/profile_images/1867465428831965184/t-Tju1t9_400x400.jpg" alt="Emma Steuer Pic" />
                    </div>
                    {/* Name + Username */}
                    <div>
                        {/* Name */}
                        <div>
                            Emma Steuer
                        </div>
                        {/* Username */}
                        <div className='text-gray-400'>
                            @emmysteuer
                        </div>
                    </div>
                </div>
                {/* Post */}
                <div className='flex flex-col space-y-2'>
                    {/* Post description */}
                    <div>
                        Your AI agent can fuck you around definitely! Make your own bitches.
                    </div>
                    {/* Post Video */}
                    <div>
                        <video width="300" height="200" autoPlay loop muted controls>
                            <source src={EmmaVideo} type="video/mp4" />
                        </video>
                    </div>
                    {/* Engagement Section */}
                    <div className='flex space-x-4 items-center text-gray-400'>
                        {/* Comments */}
                        <div className='flex space-x-1 justify-center items-center'>
                            <MessageCircle className='w-5 h-5' />
                            <span>11</span>
                        </div>

                        {/* Retweets */}
                        <button onClick={Retweet} className={`flex space-x-1 justify-center items-center cursor-pointer hover:text-blue-500 ${retweetClicked ? 'text-blue-500' : 'text-gray-400'}`}>
                            <Repeat2 className='w-5 h-5' />
                            <span>{retweetCnt}</span>
                        </button>

                        {/* Likes */}
                        <div onClick={like} className={`flex space-x-1 justify-center items-center cursor-pointer hover:text-pink-500 ${likeBtnClicked ? 'text-pink-500' : 'text-gray-400'}`}>
                            <Heart className='w-5 h-5' fill={`${likeBtnClicked ? '#ed64a6' : 'none'}`} />
                            <span>{likeCnt}</span>
                        </div>

                        {/* Stats */}
                        <div className='flex space-x-1 justify-center items-center'>
                            <ChartColumn className='w-5 h-5' />
                            <span>13K</span>
                        </div>

                        {/* Save Post */}
                        <div>
                            <Bookmark className='w-5 h-5' />
                        </div>

                        {/* Share Post */}
                        <div>
                            <Share2 className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}