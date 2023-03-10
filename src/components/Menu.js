import React from 'react';
export default function Menu({ items }) {
  return (
    <div className="sidebar-menu">
      <ul>
        {items &&
          items.map((item, index) => {
            return (
              <li key={index}>
                <a href={`/${item}`}>{item}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
