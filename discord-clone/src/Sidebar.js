import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SidebarChannel from './SidebarChannel';
import { Avatar } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';


function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Server Name</h3>
				<ExpandMoreIcon />
			</div>

			<div className="sidebar__channels">
				<div className="sidebar__channelsHeader">
					<div className="sidebar__header">
						<ExpandMoreIcon />
						<h4>Text Channels</h4>
					</div>
					<AddIcon className="sidebar__addChannel" />
				</div>
				<div className="sidebar__channelsList">
					<SidebarChannel />
					<SidebarChannel />
					<SidebarChannel />
					<SidebarChannel />
				</div>
			</div>
			<div className="sidebar__voice">
				<SignalCellularAltIcon
					className="sidebar__voiceIcon"
					fontSize="large"
				/>
				<div className="sidebar__voiceInfo">
					<h3>Voice Connected</h3>
					<p>Stream</p>
				</div>
				<div className="sidebar__voiceIcons">
					<InfoOutlinedIcon />
					<CallIcon />
				</div>
			</div>
			<div className="sidebar__profile">
				<Avatar src="https://avatars3.githubusercontent.com/u/3681427?s=460&u=066404c6384c993be0018b7382430ba9ac4ec7a8&v=4" />
				<div className="sidebar__profileInfo">
					<h3>John Doe</h3>
					<p>#thisIsMyID</p>
				</div>

				<div className="sidebar__profileIcons">
					<MicIcon />
					<HeadsetIcon />
					<SettingsIcon />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
