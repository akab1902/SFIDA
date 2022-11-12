import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Upload from "views/admin/Upload.js";
import Charity from "views/admin/Charity.js";
import CompanyPage from "views/admin/CompanyPage.js";
import MyDashboard from "views/admin/MyDashboard";
import Inbox from "views/admin/Inbox";

class Admin extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/upload" exact component={Upload} />
              <Route path="/admin/charity" exact component={Charity} />
              <Route path="/admin/company_page" exact component={CompanyPage} />
              <Route path="/admin/dashboard" exact component={MyDashboard} />
              <Route path="/admin/inbox" exact component={Inbox} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
