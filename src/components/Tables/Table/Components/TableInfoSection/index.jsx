import React from 'react'

function TableInfoSection({ children, mt = 0, mb = 0 }) {
    return (
        <div
          style={{ marginTop: `${mt}px`, marginBottom: `${mb}px` }}
          className=" flex justify-between"
        >
          {children}
        </div>
    );
}

export default TableInfoSection