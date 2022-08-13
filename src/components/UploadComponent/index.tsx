import { Grid, Typography, Link, Box } from '@mui/material'
import { createRef, useState, RefObject, useEffect } from 'react'
import { FileCopy } from '@mui/icons-material'
import ButtonComponent from '../ButtonComponent'

const acceptedTypes = ['.pdf', 'application/pdf']

interface UploadComponentProps {
  onFileSelected: undefined | ((file: File | null) => void)
}

export default function UploadComponent({
  onFileSelected,
}: UploadComponentProps) {
  const [message, setMessage] = useState({
    type: null,
    text: null,
  } as { type: string | null; text: string | null })
  const [fileHovering, setFileHovering] = useState(false)
  const fileInputRef: RefObject<HTMLInputElement> = createRef()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    if (selectedFile !== null) {
      if (onFileSelected) {
        onFileSelected(selectedFile)
      }
    }
  }, [selectedFile])

  function clearMessage() {
    setMessage({ type: null, text: null })
  }

  function handleInputSelectFile(e: any) {
    if (e.target.files.length < 1) return

    setSelectedFile(e.target.files[0])
  }

  const handleDragStart = (ev: any) => {
    ev.preventDefault()
    clearMessage()
    setSelectedFile(null)
    setFileHovering(true)

    const files = []

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i]
          if (file) files.push(file)
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        files.push(ev.dataTransfer.files[i])
      }
    }

    if (files.length < 1) {
      setMessage({ type: 'erro', text: 'Falha ao obter o arquivo' })
    }

    const itemType = files[0].type

    if ((itemType && !acceptedTypes.includes(itemType)) || itemType === '') {
      setMessage({
        type: 'error',
        text: 'Tipo de arquivo não suportado. Selecione um pdf válido.',
      })
    }
  }

  const handleDragExit = (e: any) => {
    setFileHovering(false)
    e.preventDefault()
    clearMessage()
  }

  const handleDropCapture = (ev: any) => {
    setFileHovering(false)
    ev.preventDefault()

    const files = []

    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (
          ev.dataTransfer.items[i].kind === 'file' &&
          acceptedTypes.includes(ev.dataTransfer.items[i].type)
        ) {
          const file = ev.dataTransfer.items[i]
          files.push(file)
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        const file = ev.dataTransfer.files[i]
        files.push(file)
      }
    }

    if (files.length < 1) {
      setMessage({
        type: 'error',
        text: 'Falha ao obter arquivo',
      })
      return
    }

    const itemType = files[0].type
    if (itemType && !acceptedTypes.includes(itemType)) {
      setMessage({
        type: 'error',
        text: 'Tipo de arquivo não suportado. Selecione um pdf válido.',
      })
    }

    let f = files[0]

    if (typeof f.getAsFile === 'function') f = f.getAsFile()

    if (!(f instanceof File)) {
      setMessage({
        type: 'error',
        text: 'Falha ao obter arquivo',
      })
    }
    setSelectedFile(f)
  }

  const handleDragAreaClick = (e: any) => {
    fileInputRef!.current!.click()
  }

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          background: fileHovering ? '#f5f5f5' : '#FFFFFF',
          opacity: fileHovering ? 0.8 : 1,
        }}
        sx={{
          minHeight: '300px',
          border: '2px dashed #0CABA8',
          borderRadius: '5px',
        }}
        onDragOver={handleDragStart}
        onDragLeave={handleDragExit}
        onDrop={handleDropCapture}
      >
        {!selectedFile && (
          <>
            {!fileHovering && (
              <Grid item xs={12}>
                <Box width="100%" display="flex" justifyContent="center">
                  <ButtonComponent
                    isUpload
                    label="Selecionar histórico"
                    onClick={handleDragAreaClick}
                    variant="contained"
                    color="secondary"
                  />
                </Box>

                <Typography variant="body1" marginTop={1}>
                  Ou{' '}
                  <Link href="selectCourses">
                    selecionar disciplinas já cursadas
                  </Link>
                </Typography>
              </Grid>
            )}
            {fileHovering && (message.text ? message.text : <FileCopy />)}
          </>
        )}
        {selectedFile && (
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              marginBottom={2}
              display="flex"
              justifyContent="center"
            >
              <Typography>{JSON.stringify(selectedFile.name)}</Typography>
            </Grid>
            <Grid item xs={4}>
              <ButtonComponent
                isUpload
                label="Enviar este arquivo"
                onClick={handleDragAreaClick}
                variant="contained"
                color="secondary"
              />
            </Grid>
            <Grid item xs={4}>
              <ButtonComponent
                isUpload
                label="Selecionar outro arquivo"
                onClick={handleDragAreaClick}
                variant="outlined"
                color="secondary"
              />
            </Grid>
          </Grid>
        )}
      </Grid>

      <Box display="none">
        <form>
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedTypes.join(',')}
            onChange={handleInputSelectFile}
          />
        </form>
      </Box>
    </>
  )
}
