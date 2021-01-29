import React from "react";
import "./Sidebar.css";
import SidebarRow from "./Siderow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { useStateValue } from "./StateProvider";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";
import TimerIcon from '@material-ui/icons/Timer';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <Link to={"/covid-19"} className='sidebar__options'>
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      </Link>
      <Link to={"/message"} className='sidebar__options'>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>

      </Link>

     
     
     
     <Link to={"/stopwatch"} className='sidebar__options'>
     <SidebarRow Icon={TimerIcon} title="Productive Stopwatch" />
     </Link>
     
     

      
    </div>
  )
}

export default Sidebar;
