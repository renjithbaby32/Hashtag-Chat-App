import React from 'react';

export const Avatar = ({
  showOnline = false,
  color = 'greenyellow',
}: {
  showOnline?: boolean;
  color?: string;
}) => {
  return (
    <div className="position-relative bg-dark mx-2 d-flex align-items-center justify-content-center message-avatar">
      A
      {showOnline && (
        <span
          className="online-indicator"
          style={{ backgroundColor: color }}
        ></span>
      )}
    </div>
  );
};
