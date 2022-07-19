import React,{useState} from 'react';
import FriendImg from '../data/friend.png';

export default function Friend(props) {
  const [handler,setHandler] = useState(false);

  return <>
  <div className={"FriendBtn"+(handler ? " active" : "")} onClick={event => {
    setHandler(!handler);
  }}>
    <img className='FriendImge' src={FriendImg} alt='FriendBtn'></img>
  <div className='FriendDiv'>
    <p>test1</p>
    <p>test1</p>
    <p>test1</p>
  </div>
  </div>
  </>
}