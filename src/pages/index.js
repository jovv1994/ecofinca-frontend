import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import stylesLandingPage from "../styles/landingpage.module.css";
import Link from "next/link";
import Layout from "@/components/layout";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>EcoFinca</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={stylesLandingPage.container}>
            <Image
              src="/images/imageprincipal.svg" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="imagen principal"
            />
          </div>
          <div className={stylesLandingPage.ten}>
            <h1>
              <span>EcoFinca: ' </span> La solución Tecno-ecológica para el
            </h1>
            <h1>manejo de tus desechos plásticos que</h1>
            <h1>necesitas!</h1>
          </div>
          <Hr />
          <div className={stylesLandingPage.time}>
            <div className={stylesLandingPage.tree}>
              <div className={stylesLandingPage.forty}>
                <h2>Si eres dueño de una finca, tienes</h2>
                <h2>residuos plásticos y no sabes que</h2>
                <h2>hacer con ellos, EcoFinca quiere</h2>
                <h2>darte una mano </h2>
              </div>
            </div>
            <div className={stylesLandingPage.one}>
              <div className={stylesLandingPage.once}>
                <div className={stylesLandingPage.syx}>
                  <Image
                    src="/images/mano.svg" // Route of the image file
                    height={70} // Desired size with correct aspect ratio
                    width={100} // Desired size with correct aspect ratio
                    alt="apreton"
                  />
                </div>
              </div>
              <div className={stylesLandingPage.rise}>
                <div className={stylesLandingPage.sure}>
                  <div className={stylesLandingPage.tataa}>
                    <h5>Quiero </h5>
                    <h5>Saber mas</h5>
                  </div>
                  <div className={stylesLandingPage.flecha}>
                    <Image
                      src="/images/tractor.svg" // Route of the image file
                      height={35} // Desired size with correct aspect ratio
                      width={45} // Desired size with correct aspect ratio
                      alt="recarga"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Hr />
          <div className={stylesLandingPage.time}>
            <div className={stylesLandingPage.four}>
              <div className={stylesLandingPage.once}>
                <div className={stylesLandingPage.syx}>
                  <Image
                    src="/images/world.svg" // Route of the image file
                    height={100} // Desired size with correct aspect ratio
                    width={100} // Desired size with correct aspect ratio
                    alt="oud world"
                  />
                </div>
              </div>
              <div className={stylesLandingPage.rises}>
                <div className={stylesLandingPage.sures}>
                  <div className={stylesLandingPage.tataas}>
                    <h5>fincas </h5>
                    <h5>centro acopio </h5>
                  </div>
                  <div className={stylesLandingPage.flechas}>
                    <Image
                      src="/images/seedling.svg" // Route of the image file
                      height={45} // Desired size with correct aspect ratio
                      width={55} // Desired size with correct aspect ratio
                      alt="flor"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesLandingPage.five}>
              <div className={stylesLandingPage.forty}>
                <h2>Sé parte del cambio y ayuda al medio </h2>
                <h2>ambiente, como centro de acopio,</h2>
                <h2>EcoFinca te ayudará a gestionar</h2>
                <h2>cada recolección ya que estarás en </h2>
                <h2>contacto directo con los dueños de </h2>
                <h2>fincas </h2>
              </div>
            </div>
          </div>
          <Hr />
          <div className={stylesLandingPage.time}>
            <div className={stylesLandingPage.six}>
              <div className={stylesLandingPage.rise}>
                <div className={stylesLandingPage.trys}>
                  <div className={stylesLandingPage.fortys}>
                    <h2>Nuestros</h2>
                    <h2>Objetivos</h2>
                  </div>
                </div>
              </div>
              <div className={stylesLandingPage.twe}>
                <div className={stylesLandingPage.syx}>
                  <Image
                    src="/images/allow.svg" // Route of the image file
                    height={105} // Desired size with correct aspect ratio
                    width={115} // Desired size with correct aspect ratio
                    alt="oud world"
                  />
                </div>
              </div>
            </div>
            <div className={stylesLandingPage.two}>
              <div className={stylesLandingPage.sevy}>
                <div className={stylesLandingPage.tone}>
                  <Image
                    src="/images/wifi.svg" // Route of the image file
                    height={45} // Desired size with correct aspect ratio
                    width={55} // Desired size with correct aspect ratio
                    alt="wi-fi"
                  />
                </div>
                <div className={stylesLandingPage.twys}>
                  <div className={stylesLandingPage.tweny}>
                    <h3>Conectar a los dueños de fincas con los</h3>
                    <h3> centros de acopio</h3>
                  </div>
                </div>
              </div>
              <div className={stylesLandingPage.eighy}>
                <div className={stylesLandingPage.tones}>
                  <Image
                    src="/images/users.svg" // Route of the image file
                    height={45} // Desired size with correct aspect ratio
                    width={55} // Desired size with correct aspect ratio
                    alt="usuario"
                  />
                </div>
                <div className={stylesLandingPage.twy}>
                  <div className={stylesLandingPage.twenys}>
                    <h3>Crear una comunidad recicladora que</h3>
                    <h3>comparta experiencias y consejos</h3>
                    <h3>amigables con el medio ambiente</h3>
                  </div>
                </div>
              </div>
              <div className={stylesLandingPage.nany}>
                <div className={stylesLandingPage.toner}>
                  <Image
                    src="/images/undo.svg" // Route of the image file
                    height={45} // Desired size with correct aspect ratio
                    width={55} // Desired size with correct aspect ratio
                    alt="recarga"
                  />
                </div>
                <div className={stylesLandingPage.twy}>
                  <div className={stylesLandingPage.twenr}>
                    <h3>Concientizar sobre el tratamiento</h3>
                    <h3>tradicional de los plásticos de tipo HDPE y</h3>
                    <h3>dar un giro de 180° a esta situación</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Hr />
          <div className={stylesLandingPage.eight}>
            <Link href="/registro/finca">
              <Pointer className={stylesLandingPage.seven}>
                <div className={stylesLandingPage.try}>
                  <div className={stylesLandingPage.forty}>
                    <h2>Tengo una Finca</h2>
                  </div>
                </div>
                <div className={stylesLandingPage.fouy}>
                  <div className={stylesLandingPage.syx}>
                    <Image
                      src="/images/track.svg" // Route of the image file
                      height={105} // Desired size with correct aspect ratio
                      width={115} // Desired size with correct aspect ratio
                      alt="oud world"
                    />
                  </div>
                </div>
                <div className={stylesLandingPage.fivy}>
                  <div className={stylesLandingPage.sure}>
                    <div className={stylesLandingPage.tataa}>
                      <h5>Quiero ser parte </h5>
                      <h5>de EcoFinca </h5>
                    </div>
                    <div className={stylesLandingPage.flecha}>
                      <Image
                        src="/images/users-2.svg" // Route of the image file
                        height={25} // Desired size with correct aspect ratio
                        width={35} // Desired size with correct aspect ratio
                        alt="user-finca"
                      />
                    </div>
                  </div>
                </div>
              </Pointer>
            </Link>
            <Link href="/registro/acopio">
              <Pointer className={stylesLandingPage.nane}>
                <div className={stylesLandingPage.try}>
                  <div className={stylesLandingPage.forty}>
                    <h2>Tengo un centro</h2>
                    <h2>de acopio</h2>
                  </div>
                </div>
                <div className={stylesLandingPage.fouy}>
                  <div className={stylesLandingPage.syx}>
                    <Image
                      src="/images/home.svg" // Route of the image file
                      height={105} // Desired size with correct aspect ratio
                      width={115} // Desired size with correct aspect ratio
                      alt="oud world"
                    />
                  </div>
                </div>
                <div className={stylesLandingPage.fivy}>
                  <div className={stylesLandingPage.sures}>
                    <div className={stylesLandingPage.tataas}>
                      <h5>Quiero ser parte</h5>
                      <h5>de EcoFinca </h5>
                    </div>
                    <div className={stylesLandingPage.flechas}>
                      <Image
                        src="/images/users-3.svg" // Route of the image file
                        height={25} // Desired size with correct aspect ratio
                        width={35} // Desired size with correct aspect ratio
                        alt="user-acopio"
                      />
                    </div>
                  </div>
                </div>
              </Pointer>
            </Link>
          </div>
          <Hr />
          <div className={stylesLandingPage.tens}>
            <h3>
              Ya tienes una cuenta?{"   "}
              <Link href="/sesion/login">
                <Hiper>Iniciar Sesión</Hiper>
              </Link>
            </h3>
          </div>
        </main>
      </div>
    </Layout>
  );
};
export default Home;

const Hr = styled.hr`
  width: 100%;
  margin: auto;
  color: #1b4332;
`;

const Hiper = styled.a`
  margin: 5px;
  color: #1b4332;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
`;

const Pointer = styled.div`
  cursor: pointer;
`;
