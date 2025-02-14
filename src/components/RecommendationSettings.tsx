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
import {
  resetRecommendation,
  selectAcademicHistory,
  setRecommendation,
} from '@/store/recommendation'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchRecommendationMutation } from '@/api'

const getPercentage = (partial: number, total: number) => {
  const percentage = (partial / total) * 100
  return Math.round(percentage * 100) / 100
}

export default function RecommendationSettings() {
  const academicHistory = useSelector(selectAcademicHistory)

  const dispatch = useDispatch()
  const [fetchAcademicHistory, { data }] = useFetchRecommendationMutation()

  const [totalIntegrated, setTotalIntegrated] = useState(0)
  const [mandatoryIntegrated, setMandatoryIntegrated] = useState(0)
  const [optionalIntegrated, setOptionalIntegrated] = useState(0)
  const [optionalPendingInHours, setOptionalPendingInHours] = useState(0)
  const [optionalPendingInCredits, setOptionalPendingInCredits] = useState(0)
  const [supplementaryIntegrated, setSupplementaryIntegrated] = useState(0)
  const [maxCreditsByPeriod, setMaxCreditsByPeriod] = useState(24)
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

  useEffect(() => {
    if (!data) {
      return
    }

    dispatch(setRecommendation(data))
  }, [data])

  const handleMaxCreditsChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue === 'number') {
      setMaxCreditsByPeriod(newValue)
    }
  }

  const handleCancelRecommendation = () => {
    dispatch(resetRecommendation())
  }

  const handleGetRecommendation = () => {
    fetchAcademicHistory({
      settings: {
        maxCreditsByPeriod,
        curriculumId: academicHistory?.curriculumId,
      },
      approved: academicHistory?.approvedCourses,
    })
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
                Até <strong>{maxCreditsByPeriod} créditos</strong> por semestre
              </Typography>
              <Tooltip title="Quantidade máxima de créditos em disciplinas que será recomendada em cada semestre.">
                <InfoOutlined fontSize="small" />
              </Tooltip>
            </Box>

            <Slider
              value={maxCreditsByPeriod}
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
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancelRecommendation}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={handleGetRecommendation}
            >
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
