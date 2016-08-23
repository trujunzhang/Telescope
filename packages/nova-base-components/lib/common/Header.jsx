import React from 'react';
//import { Messages } from "meteor/nova:core";

const Header = ({currentUser}) => {

    const logoUrl = Telescope.settings.get("logoUrl");
    const siteTitle = Telescope.settings.get("title", "Nova");
    const tagline = Telescope.settings.get("tagline");

    return (
      <div class="header_2k8Jf">
          <div class="constraintWidth_ZyYbM">
              <HeaderContent></HeaderContent>
              <HeaderNavigation></HeaderNavigation>
          </div>
      </div>
    )
};

Header.displayName = "Header";

module.exports = Header;
