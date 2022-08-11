import { Box, Grid, Typography } from '@mui/material'

export default function Guide() {
  const items = [
    {
      title: 'Título',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus iste repellat fugit et, explicabo eos? Dicta expedita dolore modi sint accusamus eos, iure accusantium iste facere soluta porro autem?',
    },
    {
      title: 'b',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus iste repellat fugit et, explicabo eos? Dicta expedita dolore modi sint accusamus eos, iure accusantium iste facere soluta porro autem?',
    },
    {
      title: 'b',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus iste repellat fugit et, explicabo eos? Dicta expedita dolore modi sint accusamus eos, iure accusantium iste facere soluta porro autem?',
    },
    {
      title: 'b',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus iste repellat fugit et, explicabo eos? Dicta expedita dolore modi sint accusamus eos, iure accusantium iste facere soluta porro autem?',
    },
  ]

  return (
    <Grid container spacing={4} display="flex" justifyContent="center">
      {items.map(item => (
        <Grid item xs={12} sm={6}>
          <Box pb={2}>
            <Typography variant="h2">{item.title}</Typography>
          </Box>

          <Typography variant="body1">{item.content}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}
