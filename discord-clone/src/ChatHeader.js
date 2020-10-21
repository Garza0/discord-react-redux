import React from 'react';
import './ChatHeader.css';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function ChatHeader() {
	return (
		<div className="chatHeader">
			<div className="chatHeader__left">
				<h3>
					<span className="chatHeader__hash">
						#
					</span>
					Test Channel Name
				</h3>
			</div>
			<div className="chatHeader__right">
				<NotificationsIcon />
				<EditLocationIcon />
				<PeopleAltIcon />

				<div className="chatHeader__search">
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</div>

				<SendRoundedIcon />
				<HelpRoundedIcon />
			</div>
		</div>
	)
}

export default ChatHeader
