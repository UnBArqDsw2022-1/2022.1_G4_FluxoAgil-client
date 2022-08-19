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
import { OptionalCourse } from '../../app_types'

interface Props {
  curriculaeId: string
  open: boolean
  handleClose: () => void
  selectedOptionalCourses: OptionalCourse[]
  setSelectedOptionalCourses: (courses: OptionalCourse[]) => void
}

const top100Films: OptionalCourse[] = [
  { label: 'The Shawshank Redemption', workloadInHours: 1994 },
  { label: 'The Godfather', workloadInHours: 1972 },
  { label: 'The Godfather: Part II', workloadInHours: 1974 },
  { label: 'The Dark Knight', workloadInHours: 2008 },
  { label: '12 Angry Men', workloadInHours: 1957 },
  { label: "Schindler's List", workloadInHours: 1993 },
  { label: 'Pulp Fiction', workloadInHours: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    workloadInHours: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', workloadInHours: 1966 },
  { label: 'Fight Club', workloadInHours: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    workloadInHours: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    workloadInHours: 1980,
  },
  { label: 'Forrest Gump', workloadInHours: 1994 },
  { label: 'Inception', workloadInHours: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    workloadInHours: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", workloadInHours: 1975 },
  { label: 'Goodfellas', workloadInHours: 1990 },
  { label: 'The Matrix', workloadInHours: 1999 },
  { label: 'Seven Samurai', workloadInHours: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    workloadInHours: 1977,
  },
  { label: 'City of God', workloadInHours: 2002 },
  { label: 'Se7en', workloadInHours: 1995 },
  { label: 'The Silence of the Lambs', workloadInHours: 1991 },
  { label: "It's a Wonderful Life", workloadInHours: 1946 },
  { label: 'Life Is Beautiful', workloadInHours: 1997 },
  { label: 'The Usual Suspects', workloadInHours: 1995 },
  { label: 'Léon: The Professional', workloadInHours: 1994 },
  { label: 'Spirited Away', workloadInHours: 2001 },
  { label: 'Saving Private Ryan', workloadInHours: 1998 },
  { label: 'Once Upon a Time in the West', workloadInHours: 1968 },
  { label: 'American History X', workloadInHours: 1998 },
  { label: 'Interstellar', workloadInHours: 2014 },
  { label: 'Casablanca', workloadInHours: 1942 },
  { label: 'City Lights', workloadInHours: 1931 },
  { label: 'Psycho', workloadInHours: 1960 },
  { label: 'The Green Mile', workloadInHours: 1999 },
  { label: 'The Intouchables', workloadInHours: 2011 },
  { label: 'Modern Times', workloadInHours: 1936 },
  { label: 'Raiders of the Lost Ark', workloadInHours: 1981 },
  { label: 'Rear Window', workloadInHours: 1954 },
  { label: 'The Pianist', workloadInHours: 2002 },
  { label: 'The Departed', workloadInHours: 2006 },
  { label: 'Terminator 2: Judgment Day', workloadInHours: 1991 },
  { label: 'Back to the Future', workloadInHours: 1985 },
  { label: 'Whiplash', workloadInHours: 2014 },
  { label: 'Gladiator', workloadInHours: 2000 },
  { label: 'Memento', workloadInHours: 2000 },
  { label: 'The Prestige', workloadInHours: 2006 },
  { label: 'The Lion King', workloadInHours: 1994 },
  { label: 'Apocalypse Now', workloadInHours: 1979 },
  { label: 'Alien', workloadInHours: 1979 },
  { label: 'Sunset Boulevard', workloadInHours: 1950 },
  {
    label:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    workloadInHours: 1964,
  },
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
    setOptionalCourses(top100Films)
  }, [])

  return (
    <Modal open={open}>
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
          value={selectedOptionalCourses}
          onChange={(event, newSelectedCourses) =>
            setSelectedOptionalCourses(newSelectedCourses)
          }
          inputValue={inputValue}
          onInputChange={(event, newValue) => setInputValue(newValue)}
          multiple
          options={optionalCourses}
          getOptionLabel={option =>
            `${option.label} (${option.workloadInHours})`
          }
          renderInput={params => (
            <TextField variant="standard" {...params} label="Movie" />
          )}
        />

        <Grid container justifyContent="space-between" mt="64px">
          <Button
            onClick={() => handleClose()}
            variant="outlined"
            color="secondary"
          >
            Cancelar
          </Button>
          <Button variant="contained" color="secondary">
            Salvar
          </Button>
        </Grid>
      </Box>
    </Modal>
  )
}
