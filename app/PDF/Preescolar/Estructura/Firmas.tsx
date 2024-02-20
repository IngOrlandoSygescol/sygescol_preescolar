import { Image, Text, View, Canvas } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  firma: any;
};
const Firmas = ({ firma }: Props) => {
  
  return (
    <>
      <View style={{ width: "100%" }}>
        <Text style={{ margin: "auto", marginTop: -5, marginBottom: 4 }}>_________________</Text>
        {
          localStorage.getItem('firma') ? (
            <Text style={{ margin: "auto", fontSize: 10 }}> {localStorage.getItem('firma')}
            </Text>
          ) : (
            <Text style={{ margin: "auto", fontSize: 10 }}> {JSON.parse(localStorage?.datosUsu)?.nombre}</Text>
          )
        }
        <Text style={{ margin: "auto", fontSize: 8, marginBottom: 2 }}> Director/a de Grupo</Text>
      </View>
    </>
  );
};

export default Firmas;
