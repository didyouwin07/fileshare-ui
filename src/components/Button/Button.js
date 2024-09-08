import React from 'react'
import styles from './buttonStyles.module.css'

export default function Button(props) {
    const {buttonText = "", buttonClickAction = () => {}} = props
  return (
    <div className={styles.wrapper} onClick={buttonClickAction}>
        {buttonText}
    </div>
  )
}
