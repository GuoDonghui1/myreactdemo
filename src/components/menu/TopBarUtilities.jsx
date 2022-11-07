import React from 'react';
import PropTypes from 'prop-types';
import NotificationBox from "./NotificationBox";
import SettingsButton from "./SettingsButton";
import UserAvatar from "./UserAvatar";
import { invoice } from "../../utils/IconData";

const notifications = [
    {
        id: '100001',
        type: 1,
        text: 'Amy shared a file with you. Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
        image: 'http://images.nowcoder.com/head/733t.png',
        date: '2天前',
    },
    {
        id: '100002',
        type: 0,
        text: 'You have a new invoice. Proin venenatis interdum est.',
        image: invoice,
        date: '3小时前',
    },
];

TopBarUtilities.propTypes = {

};

function TopBarUtilities(props) {
    return (
        <div className="app-utilities col-auto">
            <NotificationBox items={notifications}/>
            <SettingsButton/>
            <UserAvatar/>
        </div>
    );
}

export default TopBarUtilities;
