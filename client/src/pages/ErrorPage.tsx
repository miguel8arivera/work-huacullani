import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { m } from 'framer-motion';
import { Button, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import MotionContainer from '../components/animated/MotionContainer';
import { varBounce } from '../components/animated/variants/bounce';
import PageNotFoundIllustration from '../assets/ilustration_404';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const ErrorPage: FC<{}> = function () {
  return (
    <Page title="404 Page Not Found">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              Lo sentimos, ¡página no encontrada!
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              Lo sentimos, no hemos podido encontrar la página que busca. ¿Quizá ha escrito mal la
              URL? Asegúrese de revisar su ortografía.
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Ir al inicio
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
};

export default ErrorPage;
