import React from 'react';
export default function Avatar() {
  return (
    <div className="user-pic">
      <img
        className="img-responsive img-rounded"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        width={200}
      />
    </div>
  );
}
