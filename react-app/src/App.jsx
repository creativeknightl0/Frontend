import './App.css';
import Greeting from './Greeting';
import { Beyblade, Yo } from './Beyblade';
// import Die from './DiceGame/Die';
import RollDice from './DiceGame/RollDice';
import Greetings from './props/Greetings';
import LuckyNumberBtw from './props/LuckyNumberBtw';
import ArrValues from './props/arrValues';
import VlcChannels from './props/VlcChannels';
import DoubleDice from './conditionals/DoubleDice';
import DoubleDiceColored from './styles/DoubleDiceColored';
import Heading from './styles/Heading';
import NumMap from './maps/NumMap';
// import ShoppingList from './maps/ShoppingList';
import ColoredList from './maps/ColoredList';
import PropertyList from './maps/PropertyList';
import ClickerEvents from './events/ClickerEvents';
import NonClickerEvents from './events/NonClickerEvents';
// import Counter from './State/Counter';
import Toggler from './State/Toggler';
import CounterAndToggler from './State/CounterAndToggler';
import WeatherApp from './pwa/WeatherApp';
import XTweetComponent from './State/XTweetComponent';
import useOnlineStatus from './hooks/useOnlineStatus';
import Offline from './components/Offline';
import InstallPrompt from './components/InstallPrompt';
import TestingUseStateBehaviour from './State/TestingUseStateBehaviour';
import CountOnceThrice from './State/CountOnceThrice';
import FunctionUseState from './State/FunctionUseState';
import Rendering from './State/Rendering';
import TwoPlayersMatch from './State/TwoPlayersMatch';
import ObjectsWithState from './State/ObjectsWithState';
import EmojiArrayState from './State/EmojiArrayState';
import ArraySlice from './ArrayOfObjects/ArraySlice';
import ArrayOfObjects from './ArrayOfObjects/ArrayOfObjects';
import EmojisTurning from './ArrayOfObjects/EmojisTurning';
import ScoreKeeper from './State/ScoreKeeper';
import ULExample from './State/ULExample';
import ArrayFrom from './components/ArrayFrom';
import Lucky7 from './State/Lucky7';
import Die from './State/Die';
import Dice from './State/Dice';
import LuckyN from './State/LuckyN';
import { sumUp } from './utils/utils';
import Box from './State/Box';
import BoxGrid from './State/BoxGrid';
import Username from './State/UsernameForm';
import SignupForm from './State/SignupForm';
import BetterSignupForm from './State/BetterSignupForm';
import ShoppingListForm from './State/ShoppingListForm';
import ShoppingList from './State/ShoppingList';
import MovieBooking from './State/MovieBooking';
import Counter from './Effects/Counter';
import QuoteFetcher from './Effects/QuoteFetcher';
import QuoteFetchLoader from './Effects/QuoteFetchLoader';
import GithubProfile from './Effects/GithubProfile';
import RedditSubreddit from './Effects/RedditSubreddit';

// Without key prop - shows error
// const data = [
//   {item: 'eggs', isCompleted: true, quantity: 2},
//   {item: 'paneer', isCompleted: false, quantity: 1},
//   {item: 'tomato', isCompleted: false, quantity: 2}
// ];

// With key prop
const data = [
  {id: 1, item: 'eggs', isCompleted: true, quantity: 2},
  {id: 2, item: 'paneer', isCompleted: false, quantity: 1},
  {id: 3, item: 'tomato', isCompleted: false, quantity: 2}
]

const colorList = [
  {id: 1, color: 'red'},
  {id: 2, color: 'blue'},
  {id: 3, color: 'aqua'},
  {id: 4, color: 'yellow'},
  {id: 5, color: 'violet'}
];

const property = [
  {id: 1, name: 'House1', address: 'NY', rating: 4.95, price: 50.55},
  {id: 2, name: 'House2', address: 'TX', rating: 5.0, price: 105},
  {id: 3, name: 'Mansion2', address: 'MS', rating: 4.8, price: 500},
  {id: 4, name: 'Cottage1', address: 'NY', rating: 4.1, price: 15},
  {id: 5, name: 'Mansion1', address: 'LA', rating: 2.9, price: 1005.50}
];

function lessThan4(dice) {
  return sumUp(dice) < 4;
}

function sameDiceNumbers(dice) {
  return dice.every(val => val === dice[0]);
}

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {/* Online status banner */}
      {!isOnline && (
        <div className='fixed t-0 w-[100%] bg-[#ff6b6b] text-white p-10 text-center z-1000'>
          You are currently offline
        </div>
      )}

      {/* Show offline component when offline */}
      {!isOnline ? (
        <Offline />
      ) : (
        <>
          <Greeting />
          <Greeting />
          <Greeting />
          <Yo />
          <Beyblade />
          {/* <Die /> */}
          <p className='play1'>Play 1:</p>
          <RollDice />
          <p className='play2'>Play 2:</p>
          <RollDice />
          <Greetings person="Amber" />
          <LuckyNumberBtw no={20} />
          <Greetings person="Lily" />
          <LuckyNumberBtw no={24} />

          {/* default values */}
          <Greetings person='Lily' address='TX' />
          <Greetings person='Amber' />
          <Greetings address='NY' />
          <LuckyNumberBtw />
          <Greetings />
          <LuckyNumberBtw />

          {/* arrays as props */}
          <ArrValues arr={[1,2,3]} />

          {/* objects as props */}
          <VlcChannels channels={{one: 'Shudder', two: 'Pluto', three: 'BBC'}} />

          {/* conditionals */}
          <DoubleDice />
          <DoubleDice />
          <DoubleDice />

          {/* Styles */}
          <DoubleDiceColored />
          <DoubleDiceColored />
          <Heading colorName="green" name='Yo' />
          <Heading colorName="yellow" name="Yolo" />

          {/* Map with react */}
          <NumMap />
          <ShoppingList data={data} />
          <ColoredList data={colorList} />
          <PropertyList data={property} />

          {/* React events */}
          {/* <ClickerEvents /> */}
          <NonClickerEvents />
          {/* With props */}
          <ClickerEvents buttonText="Click Yo" consolePrint="Yo deepshit I like yo fuck niggas" />
          <ClickerEvents buttonText="Click this tho i don't like" consolePrint="Don't touch me" />

          {/* React state */}
          {/* <Counter /> */}
          <Toggler />
          <CounterAndToggler />

          {/* practice projects */}
          <WeatherApp />

          <TestingUseStateBehaviour />
          
          <CountOnceThrice />

          <FunctionUseState />

          <Rendering />

          <TwoPlayersMatch />

          <ObjectsWithState />

          <EmojiArrayState />

          <ArraySlice />

          <ArrayOfObjects />

          <EmojisTurning />

          <ScoreKeeper numberOfPlayers={10} />

          <ULExample />

          <ArrayFrom />

          {/* <Lucky7 /> */}

          {/* <LuckyN diceCount={5} goal={25} /> */}
          {/* <LuckyN diceCount={3} winCheck={lessThan4} /> */}
          <LuckyN diceCount={2} sameDice={sameDiceNumbers} />
          
          <BoxGrid />

          <Username />

          <SignupForm />

          <BetterSignupForm />

          {/* <ShoppingListForm /> */}

          <ShoppingList />

          <Counter />

          <QuoteFetcher />

          <QuoteFetchLoader />

          <GithubProfile />

          {/* <RedditSubreddit /> */}
        </>
        // <>
        //   <div className='flex justify-center'>
        //    {/* <XTweetComponent /> */}
        //    {/* <Toggler /> */}
        //   </div>
        // </>
        // <>
        //   <MovieBooking />
        // </>
      )}
      <InstallPrompt />
    </div>
  )
}

export default App