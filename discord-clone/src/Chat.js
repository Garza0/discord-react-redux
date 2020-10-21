import React from 'react';
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


function Chat() {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectchannelId);
	const channelName = useSelector(selectchannelName);

	return (
		<div className="chat">
			<ChatHeader channelName={channelName} />
			<div className="chat__messages">
				<Message />
			</div>
			<div className="chat__input">
				<AddCircleRoundedIcon fontSize="large" />
				<form>
					<input placeholder={`Message #TESTCHANNEL`} />
					<button className="chat__inputButton" type="submit">
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
