import React from "react";

// components

import MyCardSettings from "components/MyCards/MyCardSettings.js";

export default function Upload() {
  return (
    <>
      <div className="flex flex-wrap min-h-screen-header2">
        <div className="w-full lg:w-12/12 px-4">
          <MyCardSettings />
        </div>
      </div>
    </>
  );
}
