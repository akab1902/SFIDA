import React from "react";

// components

import MyCharityCardTable from "components/MyCards/MyCharityCardTable.js";

export default function charity() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MyCharityCardTable />
        </div>
      </div>
    </>
  );
}
