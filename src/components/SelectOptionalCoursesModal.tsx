import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { OptionalCourse } from '@/types'

interface Props {
  curriculaeId: string
  open: boolean
  handleClose: () => void
  selectedOptionalCourses: OptionalCourse[]
  setSelectedOptionalCourses: (courses: OptionalCourse[]) => void
}

const courses: OptionalCourse[] = [
  { label: 'Cálculo numérico', workloadInHours: 60 },
  { label: 'Desenho mecânico', workloadInHours: 90 },
  { label: 'Algoritmo e programação de computadores', workloadInHours: 90 },
  { label: 'Introdução à engenharia', workloadInHours: 30 },
  { label: 'Humanidades e cidadania', workloadInHours: 60 },
]

export default function SelectOptionalCoursesModal({
  open,
  handleClose,
  curriculaeId,
  selectedOptionalCourses,
  setSelectedOptionalCourses,
}: Props) {
  const [inputValue, setInputValue] = useState('')
  const [optionalCourses, setOptionalCourses] = useState<OptionalCourse[]>([])

  useEffect(() => {
    // response = await axios.get('/optional-courses?course_id=xxxx&curriculae_id=${curriculaeId}')
    // setOptionalCourses(response.data)
    setOptionalCourses(courses)
  }, [])

  return (
    <Modal open={open} disableEnforceFocus onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          width: '350px',
          border: '0',
          borderRadius: '3px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '16px',
        }}
      >
        <Typography>Currículo: {curriculaeId}</Typography>

        <Typography>
          Selecione as disciplinas optativas que você deseja cursar
        </Typography>

        <Autocomplete
          multiple
          options={optionalCourses}
          value={selectedOptionalCourses}
          onChange={(event, newSelectedCourses) =>
            setSelectedOptionalCourses(newSelectedCourses)
          }
          inputValue={inputValue}
          onInputChange={(event, newValue) => setInputValue(newValue)}
          getOptionLabel={option =>
            `${option.label} (${option.workloadInHours}h)`
          }
          renderInput={params => (
            <TextField
              variant="standard"
              label="Cursos optativos"
              {...params}
            />
          )}
        />

        <Grid container justifyContent="space-between" mt="64px">
          <Button
            onClick={() => setSelectedOptionalCourses([])}
            variant="outlined"
            color="secondary"
          >
            Limpar
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Salvar
          </Button>
        </Grid>
      </Box>
    </Modal>
  )
}
