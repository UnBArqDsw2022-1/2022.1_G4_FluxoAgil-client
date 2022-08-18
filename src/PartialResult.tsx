import { Button, Grid, Link, Typography } from '@mui/material'
import SelectOptionalCoursesModal from './components/SelectOptionalCoursesModal'

export default function PartialResult() {
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
          <Button>Selecionar as disciplinas optativas</Button>
          <br />
          <Link href="editSelectedCourses">
            Selecionar as disciplinas optativas
          </Link>
        </Typography>

        {/* Restante dos inputs */}
      </Grid>

      <SelectOptionalCoursesModal open />
    </Grid>
  )
}
