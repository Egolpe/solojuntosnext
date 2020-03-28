import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { FirebaseContext } from "../../firebase/index";
import Layout from "../../components/layout/Layout";
import Error404 from "../../components/layout/404";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton";
import SocialShare from "../../components/ui/SocialShare";

const ContenedorCarta = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;
const CreadorCarta = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const Carta = () => {
  // state del componente
  const [carta, guardarCarta] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [consultarDB, guardarConsultarDB] = useState(true);

  // Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id }
  } = router;
  let channelid = id;
  let channelName = "Twitter";

  let channelImage =
    "https://yt3.ggpht.com/a-/ACSszfGDvjYK2vL_d3Bglghs2VQhTwbPrTGWxBaNDQ=s88-mo-c-c0xffffffff-rj-k-no";

  // context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      const obtenerCarta = async () => {
        const cartaQuery = await firebase.db.collection("cartas").doc(id);
        const carta = await cartaQuery.get();
        if (carta.exists) {
          guardarCarta(carta.data());
          guardarConsultarDB(false);
        } else {
          guardarError(true);
          guardarConsultarDB(false);
        }
      };
      obtenerCarta();
    }
  }, [id]);

  if (Object.keys(carta).length === 0 && !error) return "Cargando...";

  const {
    comentarios,
    creado,
    descripcion,
    nombre,
    urlimagen,
    votos,
    creador,
    haVotado
  } = carta;

  // Administrar y validar los votos
  const votarCarta = () => {
    if (!usuario) {
      return router.push("/login");
    }

    // obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;

    // Verificar si el usuario actual ha votado
    if (haVotado.includes(usuario.uid)) return;

    // guardar el ID del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];

    //  Actualizar en la BD
    firebase.db
      .collection("cartas")
      .doc(id)
      .update({
        votos: nuevoTotal,
        haVotado: nuevoHaVotado
      });

    // Actualizar el state
    guardarCarta({
      ...carta,
      votos: nuevoTotal
    });

    guardarConsultarDB(true); // hay un voto, por lo tanto consultar a la BD
  };

  // Funciones para crear comentarios
  const comentarioChange = e => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value
    });
  };

  // Identifica si el comentario es del creador de la carta
  const esCreador = id => {
    if (creador.id == id) {
      return true;
    }
  };

  const agregarComentario = e => {
    e.preventDefault();

    if (!usuario) {
      return router.push("/login");
    }

    // información extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    // Tomar copia de comentarios y agregarlos al arreglo
    const nuevosComentarios = [...comentarios, comentario];

    // Actualizar la BD
    firebase.db
      .collection("cartas")
      .doc(id)
      .update({
        comentarios: nuevosComentarios
      });

    // Actualizar el state
    guardarCarta({
      ...carta,
      comentarios: nuevosComentarios
    });

    guardarConsultarDB(true); // hay un COMENTARIO, por lo tanto consultar a la BD
  };

  // función que revisa que el creador de la carta sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;

    if (creador.id === usuario.uid) {
      return true;
    }
  };

  // elimina una carta de la bd
  const eliminarCarta = async () => {
    if (!usuario) {
      return router.push("/login");
    }

    if (creador.id !== usuario.uid) {
      return router.push("/");
    }

    try {
      await firebase.db
        .collection("cartas")
        .doc(id)
        .delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <div className="contenedor">
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {nombre}{" "}
            </h1>

            <ContenedorCarta>
              <div>
                <p>
                  Publicado hace:{" "}
                  {formatDistanceToNow(new Date(creado), { locale: es })}{" "}
                </p>
                <p>Por: {creador.nombre}</p>
                <img src={urlimagen} />
                <p>{descripcion}</p>

                {usuario && (
                  <>
                    <h2>Agrega tu comentario</h2>
                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        />
                      </Campo>
                      <InputSubmit type="submit" value="Agregar Comentario" />
                    </form>
                  </>
                )}

                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comentarios
                </h2>

                {comentarios.length === 0 ? (
                  "Aún no hay comentarios"
                ) : (
                  <ul>
                    {comentarios.map((comentario, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                        css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}
                      >
                        <p>{comentario.mensaje}</p>
                        <p>
                          Escrito por:
                          <span
                            css={css`
                              font-weight: bold;
                            `}
                          >
                            {""} {comentario.usuarioNombre}
                          </span>
                        </p>
                        {esCreador(comentario.usuarioId) && (
                          <CreadorCarta>Es Creador</CreadorCarta>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <aside>
                <div
                  css={css`
                    margin-top: 5rem;
                  `}
                >
                  <SocialShare
                    channelName={channelName}
                    channelId={channelid}
                    channelImage={channelImage}
                  />
                  <p
                    css={css`
                      text-align: center;
                    `}
                  >
                    {votos} Aplausos
                  </p>

                  {usuario && <Boton onClick={votarCarta}>Aplaude</Boton>}
                </div>
              </aside>
            </ContenedorCarta>

            {puedeBorrar() && (
              <Boton onClick={eliminarCarta}>Eliminar Carta</Boton>
            )}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Carta;
