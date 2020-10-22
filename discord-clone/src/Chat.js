import React, { useState } from 'react';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectchannelId, selectchannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';


function Chat() {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectchannelId);
	const channelName = useSelector(selectchannelName);
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		if (channelId) {
			db.collection('channels')
				.doc(channelId)
				.collection('messages')
				.orderBy('timestamp')
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data())))
		}
	}, [channelId])

	const sendMessage = (e) => {
		e.preventDefault();

		db.collection('channels').doc(channelId).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			user: user
		})

		setInput('')
	}

	return (
		<div className="chat">
			<ChatHeader channelName={channelName} />
			<div className="chat__messages">
				{messages.map(message => (
					<Message
						timestamp={message.timestamp}
						message={message.message}
						user={message.user}
					/>
				))}
			</div>
			<div className="chat__input">
				<AddCircleRoundedIcon fontSize="large" />
				<form>
					<input
						disabled={!channelId}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder={`Message #${channelName}`}
					/>
					<button
						disabled={!channelId}
						className="chat__inputButton"
						type="submit"
						onClick={sendMessage}>
						Send Message
					</button>
				</form>
				<div className="chat__inputIcons">
					<CardGiftcardIcon fontSize="large" />
					<GifIcon fontSize="large" />
					<EmojiEmotionsIcon fontSize="large" />
				</div>

			</div>
		</div>
	)
}

export default Chat
