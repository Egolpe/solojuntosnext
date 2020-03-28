import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase/index";

const useCartas = orden => {
  const [cartas, guardarCartas] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerCartas = () => {
      firebase.db
        .collection("cartas")
        .orderBy(orden, "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerCartas();
  }, []);

  function manejarSnapshot(snapshot) {
    const cartas = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    guardarCartas(cartas);
  }

  return {
    cartas
  };
};

export default useCartas;
