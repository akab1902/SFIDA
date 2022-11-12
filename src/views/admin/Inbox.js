import React from "react";

// components

import InboxCardTable from "components/MyCards/InboxCardTable.js";

export default function Inbox() {
  return (
    <>
      <div className="flex flex-wrap mt-4 h-100">
        <div className="w-full mb-12 px-4">
          <InboxCardTable />
        </div>
      </div>
    </>
  );
}