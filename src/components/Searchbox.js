import React from 'react';
export default function Searchbox(props) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          placeholder="Search Opportunities"
          value={props.search}
        />
        <div style={{ display: 'flex' }}>
          Sort by:
          <div>
            <ul>
              <li>Relevance</li>
              <li>Newest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
