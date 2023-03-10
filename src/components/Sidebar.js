import React from 'react';
import Avatar from './Avatar';
import Menu from './Menu';
import './sidebar.css';
export default function Sidebar() {
  const menus = ['home', 'jobs', 'assessments', 'profile', 'legal', 'contact'];
  return (
    <div id="sidebar" className="sidebar-wrapper active" style={{ width: 280 }}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <Avatar />
          <div className="user-info">
            <span className="user-name">
              Jhon
              <strong>Smith</strong>
            </span>
            <span className="user-role">Administrator</span>
            <span className="user-status">
              <i className="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>

        <Menu items={menus} />
      </div>
    </div>
  );
}
