import React from 'react';
import PropTypes from 'prop-types';
import userProfile from "../../assets/images/user.png";

UserAvatar.propTypes = {

};

function UserAvatar(props) {
    return (
        <div className="app-utility-item app-user-dropdown dropdown"><a
            className="dropdown-toggle"
            id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false"><img
            src={userProfile} alt="user profile"/></a>
            <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                <li><a className="dropdown-item" href="account.html">Account</a></li>
                <li><a className="dropdown-item" href="settings.html">Settings</a></li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="login.html">Log Out</a></li>
            </ul>
        </div>
    );
}

export default UserAvatar;
