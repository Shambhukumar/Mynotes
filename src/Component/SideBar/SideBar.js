import React from 'react'
import "./sidebar.scss";
import UserImg from "../../Assets/images/user.jpg"
import SettingIcon from "../../Assets/icons/settings.svg"
import helpIcon from "../../Assets/icons/help.svg"
import backupIcon from "../../Assets/icons/backup.svg"
import SupoartIcon from "../../Assets/icons/support.svg"
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-user'>
        <img src={UserImg} alt='user'/> <span>Jhones Martinaz</span>
      </div>
      <div className='sidebar-settings'>
        <img src={SettingIcon} alt="setting"/><span>Settings</span>
      </div>
      <div className='sidebar-backup'>
        <img src={backupIcon} alt="setting"/><span>Backup</span>
      </div>
      <div className='sidebar-help'>
        <img src={helpIcon} alt="setting"/><span>Help</span>
      </div>
      <div className='sidebar-supoart'>
        <img src={SupoartIcon} alt="setting"/><span>Support</span>
      </div>
    </div>
  )
}

export default SideBar