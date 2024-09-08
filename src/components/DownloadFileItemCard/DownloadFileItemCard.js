import React from 'react'
import styles from './downloadFileItemCardStyles.module.css'
import Button from "../Button/Button"

export default function DownloadFileItemCard(props) {
    const { fileName = "", downloadLink = "" } = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconContainer}>
                <img src='/icons/download-icon.png' alt='Download Icon' className={styles.downloadIcon} />
            </div>
            <div className={styles.fileNameContainer}>{fileName}</div>
            <div className={styles.downloadButtonContainer}>
                <Button buttonText="Download" />
            </div>
        </div>
    )
}
