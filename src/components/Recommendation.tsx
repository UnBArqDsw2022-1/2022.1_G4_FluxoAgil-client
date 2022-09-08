import { Recommendation, Period, Course } from '@/types'
import { Grid, Typography, Box, Chip } from '@mui/material'
import React from 'react'

const recommendationExample: Recommendation = {
  maxCreditsByPeriod: 24,
  periods: [
    {
      credits: 24,
      courses: [
        {
          id: 'FGA-0001',
          title: 'Calculo 1',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 2',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 3',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 4',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 5',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
      ],
    },
    {
      credits: 12,
      courses: [
        {
          id: 'FGA-0001',
          title: 'Calculo 6',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 7',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
        {
          id: 'FGA-0001',
          title: 'Calculo 8',
          prerequisites: ['FGA-0003', 'FGA-0004'],
        },
      ],
    },
  ],
}

export default function RecommendationContainer() {
  const recommendation: Recommendation = recommendationExample

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">
          Cursando até{' '}
          <strong> {recommendation.maxCreditsByPeriod} créditos</strong> em
          cada, serão necessários
          <strong> {recommendation.periods.length} semestres </strong>
          para você se formar
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={2} padding={0}>
        {recommendation.periods.map((period: Period) => {
          return (
            <Grid item container xs={12} padding={0}>
              <Grid item sx={{ width: '96px' }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'inline-block',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    height: '70px',
                    width: '70px',
                    textAlign: 'center',
                    paddingTop: '18px',
                    borderRadius: '50%',
                  }}
                >
                  {period.credits}
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }} container alignItems="center">
                {period.courses.map((course: Course) => (
                  <Box
                    height="160px"
                    width="250px"
                    border="1px solid #008F8C"
                    borderRadius="5px"
                    padding="10px"
                    margin="10px"
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
                ))}
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
