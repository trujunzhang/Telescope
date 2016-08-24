import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/std:accounts-ui';
import {Modal, Dropdown, MenuItem} from 'react-bootstrap';
import {ContextPasser} from "meteor/nova:core";
import {LinkContainer} from 'react-router-bootstrap';
import Users from 'meteor/nova:users';

class HeaderSearchForm extends Component {
    render() {
        return (
          <form class="container_2cR6a" method="GET" action="/search/posts">
              <label
                class="text_3Wjo0 subtle_1BWOT base_3CbW2">
                          <span class="searchIcon_3L3Y2">
                              <svg width="15"
                                   height="15"
                                   viewBox="0 0 15 15"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <title>Oval 95</title>
                              <path
                                d="M9.383 10.347c-.987.78-2.233 1.244-3.588 1.244C2.595 11.59 0 8.997 0 5.796 0 2.595 2.595 0 5.795 0c3.2 0 5.796 2.595 5.796 5.795 0 1.355-.464 2.6-1.243 3.588L15 14.036l-.964.964-4.653-4.653zm-3.588-.12c2.448 0 4.432-1.984 4.432-4.432 0-2.447-1.984-4.43-4.432-4.43-2.447 0-4.43 1.983-4.43 4.43 0 2.448 1.983 4.432 4.43 4.432z"
                                fill="#BBB" fill-rule="evenodd"></path></svg>
                          </span>
                  <div class="tags_1FTZg" data-test="search-trigger">
                      <div class="tagScrollWrapper_2vzLG">
                          <div class="tagWrapper_2hyXS"><span
                            class="placeholder_KtrAE ellipsis_2lgar text_3Wjo0 subtle_1BWOT base_3CbW2">Discover your next favorite thing…</span>
                          </div>
                      </div>
                  </div>
                  <button class="close_19Ofw" type="reset">
                              <span>
                                  <svg width="12" height="12"
                                       viewBox="0 0 12 12"
                                       xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                                    fill-rule="evenodd"></path>
                                  </svg>
                              </span>
                  </button>
              </label>
          </form>
        )
    }
}

module.exports = HeaderSearchForm;
export default HeaderSearchForm;