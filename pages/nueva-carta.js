import React, { useState, useContext } from "react";
import { css } from "@emotion/core";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error
} from "../components/ui/Formulario";

import { FirebaseContext } from "../firebase/index";

import Error404 from "../components/layout/404";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCarta from "../validacion/validarCrearCarta";

const STATE_INICIAL = {
  nombre: "",

  imagen: "",

  descripcion: ""
};

const NuevaCarta = () => {
  // state de las imagenes
  const [nombreimagen, guardarNombre] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState("");

  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarCrearCarta, crearCarta);

  const { nombre, imagen, descripcion } = valores;

  // hook de routing para redireccionar
  const router = useRouter();

  // context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearCarta() {
    // si el usuario no esta autenticado llevar al login
    if (!usuario) {
      return router.push("/login");
    }

    // crear el objeto de nueva carta
    const carta = {
      nombre,
      urlimagen,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName
      },
      haVotado: []
    };

    // insertarlo en la base de datos
    firebase.db.collection("cartas").add(carta);

    return router.push("/");
  }

  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = progreso => guardarProgreso({ progreso });

  const handleUploadError = error => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = nombre => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("cartas")
      .child(nombre)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };

  return (
    <div>
      <Layout>
        {!usuario ? (
          <Error404 />
        ) : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              Nueva Carta
            </h1>
            <Formulario onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>Algunos datos</legend>

                <Campo>
                  <label htmlFor="nombre">Asunto</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Asunto"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.nombre && <Error>{errores.nombre}</Error>}

                <Campo>
                  <label htmlFor="imagen">Imagen</label>
                  <FileUploader
                    accept="image/*"
                    id="imagen"
                    name="imagen"
                    randomizeFilename
                    storageRef={firebase.storage.ref("cartas")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid gray",
                      color: "grey",
                      padding: 10,
                      width: 70
                    }}
                  />
                </Campo>
              </fieldset>

              <fieldset>
                <legend>Escribe aquí tu carta</legend>

                <Campo>
                  <label htmlFor="descripcion">Mensaje</label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.descripcion && <Error>{errores.descripcion}</Error>}
              </fieldset>

              {error && <Error>{error} </Error>}

              <InputSubmit type="submit" value="Crear Carta" />
            </Formulario>
          </>
        )}
      </Layout>
    </div>
  );
};

export default NuevaCarta;
