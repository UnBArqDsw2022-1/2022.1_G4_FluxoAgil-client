import { Box, Grid, Typography } from '@mui/material'

const items = [
  {
    title: 'O que é?',
    content:
      'O Fluxo Ágil oferece aos estudantes da Universidade de Brasília uma recomendação de quais disciplinas cursar nos próximos semestres para <strong>se formarem no menor tempo possível</strong>.',
  },
  {
    title: 'Como utilizar?',
    content:
      'Basta enviar seu <strong>histórico acadêmico</strong> e selecionar as opções desejadas, como quantidade de créditos por semestre, optativas etc.',
  },
  {
    title: 'Como obter o histórico?',
    content:
      'O histórico acadêmico está disponível no SIGAA. Ao abrir o menu <i>Ensino</i>, clique em <i>Emitir histórico</i> para fazer o downlaod do arquivo.',
  },
  {
    title: 'Como é calculado?',
    content:
      'A recomendação é feita através de um modelo de programação linear que analisa vários possíveis fluxos e seleciona o que leva menos semestres para ser concluído.',
  },
]

export default function Guide() {
  return (
    <Grid py={5} container spacing={4} display="flex" justifyContent="center">
      {items.map(item => (
        <Grid item xs={12} sm={6} key={item.title}>
          <Box pb={2}>
            <Typography variant="h2">{item.title}</Typography>
          </Box>

          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
