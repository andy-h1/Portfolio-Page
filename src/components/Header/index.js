import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
        <div>
                <h1>Andy Huynh</h1>
                <ul>
                        <li>
                                <NavLink to="/cv">cv</NavLink>
                        </li>
                        <li>github</li>
                        <li>linkedin</li>
                        <li>twitter</li>
                </ul>
        </div>
);
