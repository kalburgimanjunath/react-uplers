import React from 'react';
import Avatar from './Avatar';
import Menu from './Menu';
import './sidebar.css';
export default function Sidebar() {
  const menus = ['home', 'jobs', 'assessments', 'profile', 'legal', 'contact'];
  return (
    <div id="sidebar" className="sidebar-wrapper active">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <Avatar />
          <div class="user-info">
            <span class="user-name">
              Jhon
              <strong>Smith</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>

        <Menu items={menus} />
      </div>
    </div>
  );
}
