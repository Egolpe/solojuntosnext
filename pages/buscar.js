import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import DetallesCarta from "../components/layout/DetallesCarta";
import useCartas from "../hooks/useCartas";

const Buscar = () => {
  const router = useRouter();
  const {
    query: { q }
  } = router;

  // Todos las cartas
  const { cartas } = useCartas("creado");
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = cartas.filter(carta => {
      return (
        carta.nombre.toLowerCase().includes(busqueda) ||
        carta.descripcion.toLowerCase().includes(busqueda) ||
        carta.creador.nombre.toLowerCase().includes(busqueda)
      );
    });
    guardarResultado(filtro);
  }, [q, cartas]);

  return (
    <div>
      <Layout>
        <div className="listado-cartas">
          <div className="contenedor">
            <ul className="bg-white">
              {resultado.map(carta => (
                <DetallesCarta key={carta.id} carta={carta} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Buscar;
