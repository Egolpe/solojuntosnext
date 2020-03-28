import React, { useContext } from "react";
import { FirebaseContext } from "../firebase/index";
import Layout from "../components/layout/Layout";
import DetallesCarta from "../components/layout/DetallesCarta";
import useCartas from "../hooks/useCartas";

const Home = () => {
  const { cartas } = useCartas("creado");
  const { usuario } = useContext(FirebaseContext);

  const misCartas = cartas.filter(carta => {
    return carta.creador.id === usuario.uid;
  });

  return (
    <div>
      <Layout>
        <div className="listado-cartas">
          <div className="contenedor">
            <ul className="bg-white">
              {misCartas.map(carta => (
                <DetallesCarta key={carta.id} carta={carta} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
