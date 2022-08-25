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
import { useFetchOptionalCoursesQuery } from '@/api'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSelectedOptionalCourses,
  setSelectedOptionalCourses,
} from '@/store/recommendation'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

interface Props {
  curriculumId: string
  open: boolean
  handleClose: () => void
}

export default function SelectOptionalCoursesModal({
  open,
  handleClose,
  curriculumId,
}: Props) {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const selectedOptionalCourses = useSelector(selectSelectedOptionalCourses)
  const { data: optionalCoursesFromApi = [] } =
    useFetchOptionalCoursesQuery(curriculumId)

  return (
    <Modal open={open} disableEnforceFocus onClose={handleClose}>
      <Box
        width="350px"
        border="0"
        borderRadius="3px"
        padding="16px"
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
          background: 'white',
        }}
      >
        <Box mb={2} display="flex">
          <Typography mr={0.5}>Currículo:</Typography>
          <Typography>{curriculumId}</Typography>
        </Box>

        <Box>
          <Typography mb={2}>
            Selecione as disciplinas optativas que você deseja cursar
          </Typography>
        </Box>

        <Autocomplete
          multiple
          disableCloseOnSelect
          limitTags={2}
          options={optionalCoursesFromApi}
          value={selectedOptionalCourses}
          renderTags={values => `${values.length} optativas selecionadas`}
          onChange={(event, newSelectedCourses) => {
            dispatch(setSelectedOptionalCourses(newSelectedCourses))
          }}
          inputValue={inputValue}
          onInputChange={(event, newValue) => setInputValue(newValue)}
          includeInputInList={false}
          getOptionLabel={option => option.title}
          renderInput={params => (
            <TextField
              variant="outlined"
              color="secondary"
              label="Disciplinas optativas"
              {...params}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option.id}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                checked={selected}
              />
              {option.title}
            </li>
          )}
        />

        <Grid container justifyContent="space-between" mt="64px">
          <Button
            onClick={() => dispatch(setSelectedOptionalCourses([]))}
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
