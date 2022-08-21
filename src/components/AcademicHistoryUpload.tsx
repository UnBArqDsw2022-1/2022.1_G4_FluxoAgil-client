import React, { DragEvent, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import { useFetchAcademicHistoryDataMutation } from '@/api'
import { useDispatch } from 'react-redux'
import { setAcademicHistoryData } from '@/store/recommendation'

const ErrorMessage = () => (
  <Typography>
    Arraste apenas o arquivo PDF do <strong>histórico acadêmico</strong>.
  </Typography>
)

export default function UploadArea() {
  const dispatch = useDispatch()
  const [fetchAcademicHistory, { data }] = useFetchAcademicHistoryDataMutation()

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [shouldShowError, setShouldShowError] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!selectedFile) {
      return
    }

    fetchAcademicHistory(selectedFile)
  }, [selectedFile])

  useEffect(() => {
    if (!data) {
      return
    }

    dispatch(setAcademicHistoryData({ approvedCourses: data }))
  }, [data])

  const isValidDraggedFile = (items: DataTransferItemList) => {
    if (items.length !== 1 || items[0].type !== 'application/pdf') {
      return false
    }

    return true
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    const {
      dataTransfer: { items },
    } = event

    if (!isValidDraggedFile(items)) {
      setShouldShowError(true)
    }

    setIsHovering(true)
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setShouldShowError(false)
    setIsHovering(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    const {
      dataTransfer: { items, files },
    } = event

    setShouldShowError(false)
    setIsHovering(false)

    if (!isValidDraggedFile(items)) {
      return
    }

    setSelectedFile(files[0])
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.item(0) ?? null)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="300px"
      border="2px dashed #0CABA8"
      borderRadius="5px"
      position="relative"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Button
        color="secondary"
        variant="contained"
        disableElevation
        startIcon={<InsertDriveFileOutlinedIcon />}
        component="label"
      >
        <Typography>Selecionar histórico</Typography>

        <input
          type="file"
          accept="application/pdf"
          hidden
          onChange={handleFileChange}
        />
      </Button>

      <Box display="flex" alignItems="center">
        <Typography>Ou</Typography>

        <Button
          disabled
          disableRipple
          sx={{
            textDecoration: 'underline',
            ':hover': { textDecoration: 'underline' },
          }}
        >
          selecionar disciplinas já cursadas
        </Button>
      </Box>

      {isHovering && (
        <Box
          position="absolute"
          sx={{ background: '#f5f5f5', inset: '0 0 0 0' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {shouldShowError ? <ErrorMessage /> : <FileCopyOutlinedIcon />}
        </Box>
      )}
    </Box>
  )
}
