import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import SelectOptionalCoursesModal from '@/components/SelectOptionalCoursesModal'
import { InfoOutlined } from '@mui/icons-material'

export default function PartialResultAndOtherOptions() {
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
      sx={{
        minHeight: '300px',
        border: '2px solid #0CABA8',
        borderRadius: '5px',
      }}
    >
      <Grid item xs={6} sm={6} container minHeight="300px" padding={5}>
        {/* <Typography variant="body1">
          <Link href="editSelectedCourses">Editar disciplinas cursadas</Link>

        </Typography> */}

        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h2" pb={2}>
            Visão geral
          </Typography>

          <Typography>Total integralizado: 11%</Typography>
          <Typography>Obrigatórias integralizadas: </Typography>
          <Typography>Optativas integralizadas: </Typography>
        </Box>
      </Grid>

      <Grid item xs={6} sm={6} container padding={5} spacing={2}>
        <Grid item>
          <Typography pb={1}>Quantidade máxima de créditos</Typography>
          <Slider
            color="secondary"
            defaultValue={24}
            min={8}
            max={32}
            // valueLabelDisplay="on"
          />
        </Grid>

        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="Matriculadas como concluídas"
            />
          </FormGroup>
        </Grid>

        <Grid item>
          <Alert severity="info">
            Ainda falta 30h
            <Tooltip title="2 créditos">
              <InfoOutlined fontSize="small" />
            </Tooltip>
            em optativas para você se formar
          </Alert>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Button variant="outlined" color="secondary">
              Cancelar
            </Button>
            <Button variant="contained" color="secondary" disableElevation>
              Processar
            </Button>
          </Box>
        </Grid>
        {/* <Typography>Ainda faltam 30h em optativas</Typography>
        <Typography variant="body1">
          <Button onClick={() => setIsSelectOptionalCoursesModalOpen(true)}>
            Selecionar as disciplinas optativas
          </Button>
        </Typography> */}
      </Grid>

      <SelectOptionalCoursesModal
        curriculumId="6362/01"
        open={isSelectOptionalCoursesModalOpen}
        handleClose={() => setIsSelectOptionalCoursesModalOpen(false)}
      />
    </Grid>
  )
}
