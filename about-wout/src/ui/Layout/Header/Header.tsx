import React from 'react';
import { Logo } from '../../Elements/Basic/Logo';
import $ from './header.scss';

const Header: React.FC = (props) => {
    return (
        <header className={$.header}>
            <ul>
                <li><Logo color="red" ></Logo></li>
                <li></li>
            </ul>
        </header>
    )
}

export default Header