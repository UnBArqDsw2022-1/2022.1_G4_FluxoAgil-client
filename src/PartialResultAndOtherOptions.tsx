import { Button, Grid, Link, Typography } from '@mui/material'
import { useState } from 'react'
import { OptionalCourse } from '@/types'
import SelectOptionalCoursesModal from './components/SelectOptionalCoursesModal'

export default function PartialResultAndOtherOptions() {
  const [selectedOptionalCourses, setSelectedOptionalCourses] = useState<
    OptionalCourse[]
  >([])
  const [
    isSelectOptionalCoursesModalOpen,
    setIsSelectOptionalCoursesModalOpen,
  ] = useState(false)

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      padding="30px 0"
      sx={{
        minHeight: '300px',
        border: '2px solid #0CABA8',
        borderRadius: '5px',
      }}
    >
      <Grid item xs={6} container justifyContent="center">
        <Typography variant="body1">
          {/* Esse era pra ser um botão? */}
          <Link href="editSelectedCourses">Editar disciplinas cursadas</Link>
        </Typography>
        {/* Resultado parcial: visão geral */}
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <Typography>Ainda faltam 30h em optativas</Typography>
        <Typography variant="body1">
          {/* Esse era pra ser um botão? */}
          <Button onClick={() => setIsSelectOptionalCoursesModalOpen(true)}>
            Selecionar as disciplinas optativas
          </Button>
        </Typography>

        {/* Restante dos inputs */}
        {selectedOptionalCourses.map(course => (
          <p key={course.label}>
            {course.label} ({course.workloadInHours})
          </p>
        ))}
      </Grid>

      <SelectOptionalCoursesModal
        curriculaeId="6362/01"
        open={isSelectOptionalCoursesModalOpen}
        handleClose={() => setIsSelectOptionalCoursesModalOpen(false)}
        selectedOptionalCourses={selectedOptionalCourses}
        setSelectedOptionalCourses={setSelectedOptionalCourses}
      />
    </Grid>
  )
}
