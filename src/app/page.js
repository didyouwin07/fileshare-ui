"use client"
import { useState } from 'react'
import Header from "../components/Header/Header";
import Button from "../components/Button/Button"
import DownloadFileItemCard from "../components/DownloadFileItemCard/DownloadFileItemCard"
import UploadFileItemCard from "../components/UploadFileItemCard/UploadFileItemCard"
import styles from "./page.module.css";
import { DUMMY_DATA } from "../utils/Constants"

export default function Home() {
  const [fileData, setFileData] = useState(DUMMY_DATA)
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <Header />
      </div>
      <div className={styles.fileShareBodySection}>
        <div className={styles.fileUploadSection}>
          <UploadFileItemCard />
        </div>
        <div className={styles.downloadFileList}>
          {
            DUMMY_DATA.map((data, idx) => {
              return <DownloadFileItemCard {...data} key={`item_${idx}`} />
            })
          }
        </div>
      </div>
    </div>
  );
}
