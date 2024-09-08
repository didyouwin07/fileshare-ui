"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import DownloadFileItemCard from "../components/DownloadFileItemCard/DownloadFileItemCard"
import UploadFileItemCard from "../components/UploadFileItemCard/UploadFileItemCard"
import styles from "./page.module.css"
import { DUMMY_DATA } from "../utils/Constants"

export default function Home() {
  const [fileData, setFileData] = useState(DUMMY_DATA)
  const [selectedFile, setSelectedFile] = useState(null)

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:3003/files')
      setFileData(response.data.files)
    } catch (error) {
      console.error('Error fetching files:', error)
    }
  }

  const uploadFile = async () => {
    const input = document.createElement('input')
    input.type = 'file'

    input.onchange = async (event) => {
      const file = event.target.files[0]
      if (!file) {
        alert('No file selected!')
        return
      }

      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await axios.post('http://localhost:3003/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log('File uploaded successfully:', response.data)
        toast.success('File uploaded successfully!')
        fetchFiles(); // Refresh file list after upload
      } catch (error) {
        console.error('Error uploading file:', error)
        toast.error('Error uploading file')
      }
    }

    input.click()
  }

  const downloadFile = async (downloadLink) => {
    try {
      const response = await axios.get(downloadLink, { responseType: 'blob' })
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', downloadLink.split('/').pop())
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  useEffect(() => {
    fetchFiles();
  }, [])

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.headerSection}>
        <Header />
      </div>
      <div className={styles.fileShareBodySection}>
        <div className={styles.fileUploadSection}>
          <UploadFileItemCard handleUpload={uploadFile} />
        </div>
        <div className={styles.downloadFileList}>
          {
            fileData.map((data, idx) => {
              return <DownloadFileItemCard {...data} key={`item_${idx}`} handleDownload={downloadFile} />
            })
          }
        </div>
      </div>
    </div>
  );
}
