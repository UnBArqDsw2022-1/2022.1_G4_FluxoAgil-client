import { Box, Grid, Typography } from '@mui/material'

const items = [
  {
    title: 'Como funciona?',
    content:
      'O Fluxo Ágil oferece, aos estudantes da Universidade de Brasília, uma recomendação de quais disciplinas cursar nos próximos semestres para que você se forme no menor tempo possível seguindo a quantidade de créditos que deseja cursar.',
  },
  {
    title: 'Como obter seu histórico?',
    content:
      'Para utilizar a plataforma, primeiramente é necessário fazer a emissão de seu histórico pelo siga no menu de ensino. Após fazer a emissão, é preciso submeter seu histórico na plataforma e será identificado todas as disciplinas que você ainda precisa fazer. Em seguida, basta escolher quantos créditos você deseja realizar nos próximos semestre e pronto! O sistema realizará a recomendação de matérias para os próximos semestres.',
  },
  {
    title: 'Como é calculado?',
    content:
      'Para fazer o cálculo da recomendação de matrícula, primeiramente é identificado todas as disciplinas obrigatórias que o aluno ainda precisa fazer, em seguida, nosso algoritmo calcula quais disciplinas ele precisa cursar em cada semestre para se formar no menor tempo possível.',
  },
  {
    title: 'Como eu uso?',
    content:
      'Para fazer a utilização do nosso app é super fácil, você precisará colocar o seu histórico na página inicial e após isso você irá colocar quantos créditos quer cursar no semestre e depois selecionar optativas que deseja cursar. Agora é só clicar no botão de processar e você verá quais são as disciplinas que o Fluxo Ágil recomendou para você.',
  },
]

export default function Guide() {
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
