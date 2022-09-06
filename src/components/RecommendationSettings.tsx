import { useEffect, useState } from 'react'
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
import { selectAcademicHistory } from '@/store/recommendation'
import { useSelector } from 'react-redux'

const getPercentage = (partial: number, total: number) => {
  const percentage = (partial / total) * 100
  return Math.round(percentage * 100) / 100
}

export default function RecommendationSettings() {
  const academicHistory = useSelector(selectAcademicHistory)
  const [totalIntegrated, setTotalIntegrated] = useState(0)
  const [mandatoryIntegrated, setMandatoryIntegrated] = useState(0)
  const [optionalIntegrated, setOptionalIntegrated] = useState(0)
  const [optionalPendingInHours, setOptionalPendingInHours] = useState(0)
  const [optionalPendingInCredits, setOptionalPendingInCredits] = useState(0)
  const [supplementaryIntegrated, setSupplementaryIntegrated] = useState(0)
  const [maxCredits, setMaxCredits] = useState(24)
  const [
    isSelectOptionalCoursesModalOpen,
    setIsSelectOptionalCoursesModalOpen,
  ] = useState(false)

  useEffect(() => {
    if (!academicHistory) {
      return
    }

    const {
      workload: { total, mandatory, optional, supplementary },
    } = academicHistory

    const totalPercentage = getPercentage(total.integrated, total.required)
    const mandatoryPercentage = getPercentage(
      mandatory.integrated,
      mandatory.required
    )
    const optionalPercentage = getPercentage(
      optional.integrated,
      optional.required
    )
    const supplementaryPercentage = getPercentage(
      supplementary.integrated,
      supplementary.required
    )

    setTotalIntegrated(totalPercentage)
    setMandatoryIntegrated(mandatoryPercentage)
    setOptionalIntegrated(optionalPercentage)
    setOptionalPendingInCredits(optional.pending / 15)
    setOptionalPendingInHours(optional.pending)
    setSupplementaryIntegrated(supplementaryPercentage)
  }, [academicHistory])

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
      <Grid
        container
        p={5}
        minHeight="300px"
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} md={6}>
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

            <Typography>
              Total integralizado: <strong>{totalIntegrated}%</strong>
            </Typography>
            <Typography>
              Obrigatórios integralizados:{' '}
              <strong>{mandatoryIntegrated}%</strong>
            </Typography>
            <Typography>
              Optativos integralizados: <strong>{optionalIntegrated}%</strong>
            </Typography>

            {!Number.isNaN(supplementaryIntegrated) && (
              <Typography>
                Complementares integralizados:{' '}
                <strong>{supplementaryIntegrated}%</strong>
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" pb={1}>
              <Typography pr={1}>
                Até <strong>{maxCredits} créditos</strong> por semestre
              </Typography>
              <Tooltip title="Quantidade máxima de créditos em disciplinas que será recomendada em cada semestre.">
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

          <Box mt={3}>
            <Alert severity="info">
              <Typography>
                Ainda faltam {optionalPendingInCredits} créditos (
                {optionalPendingInHours}h) em optativas para você se formar.
              </Typography>
            </Alert>

            <Button
              disableRipple
              sx={{
                textDecoration: 'underline',
                ':hover': { textDecoration: 'underline' },
                p: 0,
                mt: 3,
              }}
              onClick={() => setIsSelectOptionalCoursesModalOpen(true)}
            >
              Selecionar disciplinas optativas
            </Button>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={3}
          >
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
