import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Grid,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'
import SelectOptionalCoursesModal from '@/components/SelectOptionalCoursesModal'

export default function RecommendationSettings() {
  const [maxCredits, setMaxCredits] = useState(24)
  const [
    isSelectOptionalCoursesModalOpen,
    setIsSelectOptionalCoursesModalOpen,
  ] = useState(false)

  const handleMaxCreditsChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === 'number') {
      setMaxCredits(newValue)
    }
  }

  return (
    <Box border="2px solid #0CABA8" borderRadius="5px">
      <Grid container p={5} minHeight="300px">
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            height="100%"
          >
            <Typography variant="h2" pb={2}>
              Visão geral
            </Typography>

            <Typography>Total integralizado: 11%</Typography>
            <Typography>Obrigatórias integralizadas: </Typography>
            <Typography>Optativas integralizadas: </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} spacing={2}>
          <Box>
            <Box display="flex" alignItems="center" pb={1}>
              <Typography pr={1}>
                Até <strong>{maxCredits} créditos</strong> por semestre
              </Typography>
              <Tooltip
                title={`A quantidade mínima é equivalente a disciplina com maior quantidade de créditos.
              A máxima é definida e varia de acordo com o curso`}
              >
                <InfoOutlined fontSize="small" />
              </Tooltip>
            </Box>

            <Slider
              value={maxCredits}
              min={8}
              max={32}
              color="secondary"
              onChange={handleMaxCreditsChange}
            />
          </Box>

          <Box>
            <Alert severity="info">
              <Typography>
                Ainda faltam XX em optativas para você se formar.
              </Typography>
            </Alert>

            <Typography variant="body1">
              <Button
                variant="text"
                onClick={() => setIsSelectOptionalCoursesModalOpen(true)}
              >
                Selecionar as disciplinas optativas
              </Button>
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" width="100%">
            <Button variant="outlined" color="secondary">
              Cancelar
            </Button>
            <Button variant="contained" color="secondary" disableElevation>
              Processar
            </Button>
          </Box>
        </Grid>

        <SelectOptionalCoursesModal
          curriculumId="6362/01"
          open={isSelectOptionalCoursesModalOpen}
          handleClose={() => setIsSelectOptionalCoursesModalOpen(false)}
        />
      </Grid>
    </Box>
  )
}
