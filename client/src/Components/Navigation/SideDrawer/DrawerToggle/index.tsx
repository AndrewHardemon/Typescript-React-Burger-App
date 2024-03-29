import React from 'react';

import styles from './style.module.css'

const DrawerToggle = (props: any): any => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default DrawerToggle;