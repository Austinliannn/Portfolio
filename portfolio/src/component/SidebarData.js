import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        sbName: "nav-text"
    },
    {
        title: "About Me",
        path: "/aboutme",
        icon: <AiIcons.AiFillQuestionCircle />,
        sbName: "nav-text"
    },
    {
        title: "View Projects",
        path: "/projects",
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        sbName: "nav-text"
    },
    {
        title: "Lets Work Together",
        path: "/contactme",
        icon: <IoIcons.IoIosContact />,
        sbName: "nav-text"
    },
]