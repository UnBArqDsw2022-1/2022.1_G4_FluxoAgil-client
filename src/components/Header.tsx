import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'

export default function Header() {
  return (
    <AppBar elevation={0} position="sticky">
      <Container>
        <Toolbar>
          <Box width="100%" display="flex">
            <Typography>
              <Box fontWeight="bold">Fluxo Ágil</Box>
            </Typography>
          </Box>

          <Box display="flex">
            <Button
              color="secondary"
              href="https://github.com/UnBArqDsw2022-1/2022.1_G4_FluxoAgil"
              target="_blank"
            >
              Docs
            </Button>

            <Button color="secondary" disabled>
              Sobre
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
