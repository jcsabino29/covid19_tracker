import React from 'react';
import styles from './Header.module.css';
import { Container } from '@material-ui/core';

const Header = () => {
    return(
        <div className={styles.container}>
            CoVID-19 Tracker
        </div>
    )
}

export default Header;