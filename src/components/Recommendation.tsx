import { selectRecommendation } from '@/store/recommendation'
import { Box, Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const periodNumbers = [
  '2022/2',
  '2023/1',
  '2023/2',
  '2024/1',
  '2024/2',
  '2025/1',
  '2025/2',
  '2026/1',
  '2026/2',
  '2027/1',
  '2027/2',
  '2028/1',
  '2028/2',
  '2029/1',
  '2029/2',
  '2030/1',
  '2030/2',
]

export default function Recommendation() {
  const recommendation = useSelector(selectRecommendation)

  if (!recommendation) {
    return null
  }

  return (
    <>
      <Box mb={3}>
        <Typography variant="h5" pt={3}>
          Cursando até{' '}
          <strong> {recommendation.maxCreditsByPeriod} créditos</strong> em
          cada, são necessários
          <strong> {recommendation.periods.length} semestres </strong>
          para você se formar.
        </Typography>
      </Box>

      <Box>
        {recommendation.periods.map((period, index) => (
          <Grid container key={period[0].id} pt={6}>
            <Grid item xs={1}>
              <Box
                display="flex"
                height="100%"
                width="100%"
                // alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    height: '70px',
                    width: '70px',
                    textAlign: 'center',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="body1">
                    <strong>{periodNumbers[index]}</strong>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={11} container spacing={1}>
              {period.map(course => (
                <Grid item xs={3} key={course.id}>
                  <Card variant="outlined">
                    <CardContent sx={{ p: 2 }}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        minHeight="120px"
                      >
                        <Box>
                          <Box>
                            <Chip
                              label={course.id}
                              size="small"
                              sx={{
                                backgroundColor: '#008F8C',
                                color: '#FFF',
                              }}
                            />
                          </Box>

                          <Box minHeight="100%" py={1}>
                            <Typography>
                              <strong>{course.title}</strong>
                            </Typography>
                          </Box>
                        </Box>
                        {course.prerequisites.length > 0 && (
                          <Box display="flex">
                            <Typography>Pré-requisitos:</Typography>

                            {course.prerequisites.map(
                              (prerequisite: string) => (
                                <Box ml={1} key={prerequisite}>
                                  <Chip
                                    label={prerequisite}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                      border: '1px solid #008F8C',
                                      color: '#008F8C',
                                    }}
                                  />
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  )
}
