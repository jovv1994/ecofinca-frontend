import React from "react";
import Layout from "@/components/layout";
import FarmHistory from "@/components/FarmHistory";
import CenterHistory from "@/components/CenterHistory";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useRouter } from "next/router";
import withAuth from "@/hocs/withAuth";

const Homes = () => {
  const router = useRouter();
  const { role } = router.query;

  return (
    <div>
      <Layout>
        {role === "finca" ? (
          <Container>
            <FarmHistory />
            <Info>
              {" "}
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/educacion.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Educación
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Conoce tips para manejar de mejor manera los desechos de tus
                    agroquímicos
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/lkpy2" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/concientizacion.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Concientización
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Informate sobre los reglamentos y leyes que rigen en tu
                    gobierno para el cuidado ambiental
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/5xug1" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/proteccion.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Protección
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aprende maneras sustentables de cuidar tus fincas sin dañar
                    el suelo y el medio ambiente
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/oivbo" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
            </Info>
          </Container>
        ) : (
          <Container>
            <CenterHistory />
            <Info>
              {" "}
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/prevencion.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Prevención
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aprende formas corectas de limpiar y almacenar los envases
                    quimicos recolectados
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/8fg13" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/gestion.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gestión
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aspectos para iniciar el camino de una logística verde que
                    deberías tomar en cuenta.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/vktlx" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
              <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/tecnologia.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tecnología
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amor al medio ambiente también esta en desarrollar
                    tecnología que mejore el reciclaje.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Hiper href="https://n9.cl/j0rcvz" target="_blank">
                      Aprender más
                    </Hiper>
                  </Button>
                </CardActions>
              </StyledCard>
            </Info>
          </Container>
        )}
      </Layout>
    </div>
  );
};

export default withAuth(Homes);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background: #74c69d;
  width: 100%;
  padding: 15px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-column-gap: 75px;
  background: #74c69d;
  padding: 15px;
  width: 100%;
`;

const Hiper = styled.a`
  text-decoration: none;
`;

const StyledCard = styled(Card)``;
