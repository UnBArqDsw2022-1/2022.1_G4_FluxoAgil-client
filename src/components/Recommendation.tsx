import { Recommendation, Period, Course } from '@/types'
import { Grid, Typography, Box, Chip } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRecommendation } from 'src/store/recommendation'

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

export default function RecommendationContainer() {
  const recommendation: Recommendation = useSelector(selectRecommendation)

  return (
    <Grid container spacing={2} padding={0} paddingLeft={0}>
      <Grid item xs={12}>
        <Typography variant="body1">
          Cursando até{' '}
          <strong> {recommendation.maxCreditsByPeriod} créditos</strong> em cada
          semestre, serão necessários
          <strong> {recommendation.periods.length} semestres </strong>
          para você se formar
        </Typography>
      </Grid>
      <Grid item xs={12} padding={0} marginTop="8px">
        {recommendation.periods.map((period: Period, index) => {
          return (
            <Grid container padding={0}>
              <Grid item xs={1} display="flex" alignItems="center">
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
              </Grid>
              <Grid item xs={11} container paddingLeft="6px">
                <Box
                  display="flex"
                  flexWrap="wrap"
                  padding={0}
                  margin={0}
                  marginY="16px"
                  width="100%"
                  justifyContent="center"
                >
                  {period.courses.map((course: Course) => {
                    return (
                      <Box
                        height="160px"
                        width="250px"
                        border="2px solid #008F8C"
                        borderRadius="5px"
                        padding="8px"
                        paddingLeft="16px"
                        margin="4px"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-around',
                        }}
                      >
                        <div>
                          <Chip
                            label={course.id}
                            color="secondary"
                            sx={{
                              paddingY: '4px',
                              paddingX: '8px',
                              lineHeight: '110%',
                              backgroundColor: '#008F8C',
                              color: '#FFF',
                            }}
                          />
                        </div>
                        <Typography variant="body1">
                          <strong>{course.title}</strong>
                        </Typography>
                        {course.prerequisites.length > 0 && (
                          <Typography variant="body1">
                            Pré-requisitos:
                          </Typography>
                        )}
                        <div>
                          {course.prerequisites.map((prerequisite: string) => {
                            return (
                              <Chip
                                label={prerequisite}
                                variant="outlined"
                                sx={{
                                  paddingY: '4px',
                                  paddingX: '8px',
                                  lineHeight: '110%',
                                  border: '1px solid #008F8C',
                                  color: '#008F8C',
                                }}
                              />
                            )
                          })}
                        </div>
                      </Box>
                    )
                  })}
                </Box>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
