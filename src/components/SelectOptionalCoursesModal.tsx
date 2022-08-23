import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { OptionalCourse } from '@/types'
import { useFetchOptionalCoursesQuery } from '@/api'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { colors } from '@/theme'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

interface Props {
  curriculaeId: string
  open: boolean
  handleClose: () => void
  selectedOptionalCourses: OptionalCourse[]
  setSelectedOptionalCourses: (courses: OptionalCourse[]) => void
}

export default function SelectOptionalCoursesModal({
  open,
  handleClose,
  curriculaeId,
  selectedOptionalCourses,
  setSelectedOptionalCourses,
}: Props) {
  const [inputValue, setInputValue] = useState('')
  const { data: optionalCourses = [] } =
    useFetchOptionalCoursesQuery(curriculaeId)

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
        <Box marginBottom="8px" display="flex" color={colors['green-4']}>
          <Typography mr={0.5}>Currículo:</Typography>
          <Typography>{curriculaeId}</Typography>
        </Box>

        <Box>
          <Typography color={colors['green-4']} marginBottom="16px">
            Selecione as disciplinas optativas que você deseja cursar
          </Typography>
        </Box>

        <Autocomplete
          multiple
          disableCloseOnSelect
          limitTags={2}
          options={optionalCourses}
          value={selectedOptionalCourses}
          onChange={(event, newSelectedCourses) =>
            setSelectedOptionalCourses(newSelectedCourses)
          }
          inputValue={inputValue}
          onInputChange={(event, newValue) => setInputValue(newValue)}
          includeInputInList={false}
          getOptionLabel={option =>
            `${option.label} (${option.workloadInHours}h)`
          }
          renderInput={params => (
            <TextField
              variant="outlined"
              label="Cursos optativos"
              {...params}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                checked={selected}
              />
              {option.label}
            </li>
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
