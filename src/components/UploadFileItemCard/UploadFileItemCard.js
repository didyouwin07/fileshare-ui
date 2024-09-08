import React from 'react'
import styles from './uploadFileItemCardStyles.module.css'
import Button from "../Button/Button"

export default function UploadFileItemCard(props) {
    const { handleUpload } = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconContainer}>
                <img src='/icons/upload-icon.png' alt='Download Icon' className={styles.uploadIcon} />
            </div>
            <div className={styles.uploadButtonContainer}>
                <Button buttonText="Upload" buttonClickAction={handleUpload} />
            </div>
        </div>
    )
}
