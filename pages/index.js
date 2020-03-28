import React from "react";
import Layout from "../components/layout/Layout";
import DetallesCarta from "../components/layout/DetallesCarta";
import useCartas from "../hooks/useCartas";

const Home = () => {
  const { cartas } = useCartas("creado");

  return (
    <div>
      <Layout>
        <div className="listado-cartas">
          <div className="contenedor">
            <ul className="bg-white">
              {cartas.map(carta => (
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
