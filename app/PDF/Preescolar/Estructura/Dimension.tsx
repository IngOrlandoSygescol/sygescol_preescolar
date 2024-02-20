import { Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  dimensiones?: any;
  data?: any;
  alto: number;
};

function Dimension({ dimensiones, data, alto }: Props) {
  let escala2: any = "";

  const asignaturasVistas: any = {};

  const arregloFiltrado: any = [];

  for (let i = data.notas.length - 1; i >= 0; i--) {
    const asignaturaNumero = data.notas[i].Asignatura;

    if (!asignaturasVistas[asignaturaNumero]) {
      asignaturasVistas[asignaturaNumero] = true;
      arregloFiltrado.unshift(data.notas[i]); // Agrega la asignatura al principio del arreglo filtrado
    }
  }

  //data.notas = [data.notas[data.notas.length - 1]];

  let desempeño: any = [
    {
      value: 1,
      label: "Superior",
      img: "caraSuperior",
    },
    {
      value: 2,
      label: "Alto",
      img: "caraAlto",
    },
    {
      value: 3,
      label: "Básico",
      img: "caraBasico",
    },
    {
      value: 4,
      img: "caraBajo",
      label: "Bajo",
    },
  ];

  const style: any = {
    marginHeader: {
      // border: "2px solid black",
      width: "96%",
      height: 600,
      display: "flex",
    },
    table: {
      // display: "table" as any,
      width: "100%",
      heigth: "auto",
      borderStyle: "solid",
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      marginLeft: "10px",
      marginTop: "20px",
    },
    table2: {
      display: "table" as any,
      width: 100,
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      marginLeft: -1,
    },
    tableRow: {
      flexDirection: "row",
      paddingTop: "3px",
      // height: "100%",
    },
    tableColText: {
      width: "90%",
      margin: "auto",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCellTitle: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      width: "68%",
      textAlign: "center",
      height: 20,
      fontSize: 10,
      padding: "0.5%",
      fontWeight: "bold",
    },
    tableCell: {
      border: 1,
      width: "7%",
      textAlign: "center",
      height: 20,
      fontSize: 10,
      padding: "0.5%",
      fontWeight: "bold",
      marginLeft: -1,
    },
    tableCellDesempeno: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      textAlign: "center",
      width: "28%",
      height: 20,
      fontSize: 10,
      padding: "0.5%",
      fontWeight: "bold",
      marginLeft: -1,
    },
  };

  return (
    <>
      <View style={style.marginHeader} wrap>
        <View style={style.table}>

          {/* Cabecera princial */}
          <View style={style.tableRow}>
            <Text style={style.tableCellTitle}>DIMENSIONES</Text>
            <Text style={style.tableCell}>I.H.S</Text>
            <Text style={style.tableCellDesempeno}>DESEMPEÑO</Text>
          </View>

          {dimensiones.map((dim: any, key: number) => {

            const notas = arregloFiltrado.find((est: any) => dim.Asignaturas[0]?.id == est?.Asignatura);
            let escala = desempeño.find((des: any) => des.value == notas?.escala);

            return (
              <>
                {/* <View style={style.tableRow} key={key}>
                  <Text
                    style={{
                      border: 1,
                      width: "73%",
                      fontSize: 10,
                      height: 12,
                      fontWeight: "bold",
                      marginTop: 7,
                    }}
                  >
                    {dim.Area} 
                  </Text>
                  <Text
                    style={{
                      border: 1,
                      width: "27%",
                      fontSize: 10,
                      textAlign: "center",
                      fontWeight: "bold",
                      height: 12,
                      marginTop: 7,
                      marginLeft: -1,
                    }}
                  >
                    {escala?.label || ""}
                  </Text>
                </View> */}

                {dim.Asignaturas.map((asig: any, key2: number) => {

                  const notas = arregloFiltrado.find((est: any) => asig?.id == est?.Asignatura);
                  let escala = desempeño.find((des: any) => des.value == notas?.escala);
                  const procesos = arregloFiltrado.filter((est: any) => asig?.id == est?.Asignatura);
                  const observaciones = data?.observaciones?.filter((obs: any) => asig?.id == obs.Asignatura);
                  const idImg = asig.asignatura

                  return (
                    <>

                      {/* Cabecera dimensiones */}
                      <View style={style.tableRow} key={key2}>
                        <Text
                          style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            width: 340,
                            fontSize: 12,
                            height: 14,
                            fontWeight: "bold",
                            marginTop: 9,
                            textAlign: 'center'
                          }}
                        >
                          {asig.asignatura}
                        </Text>
                        <Text
                          style={{
                            border: 1,
                            width: 31,
                            height: 14,
                            fontSize: 12,
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 9,
                            marginLeft: -1,
                          }}
                        >
                          {asig.Horas}
                        </Text>
                        <Text
                          style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            width: 136,
                            textAlign: "center",
                            height: 14,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginLeft: -1,
                            marginTop: 9,
                          }}
                        >
                          {escala?.label || ""}
                        </Text>
                      </View>

                      {procesos?.map((pro: any, key3: number) => {
                        let total = (procesos.length - 1) * 34;
                        escala2 = desempeño.find((des: any) => des.value == pro?.escala);
                        alto = alto - 50;

                        if (alto == 47) {
                          alto = 297;
                          <Page />;
                        }

                        return (
                          <>
                            {/* descripcion y desempeno IMG */}
                            <View style={style.tableRow}>
                              <Text
                                style={{
                                  width: 370,
                                  height: 70,
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  padding: "10px",
                                  borderRightWidth: 1,
                                }}
                              >
                                {pro.texto.charAt(0).toUpperCase() + pro.texto.slice(1).toLowerCase()}
                              </Text>

                              <Image
                                src={`/Descriptores/${idImg}.jpg`}
                                style={{
                                  width: "60",
                                  height: "60",
                                  margin: "auto",
                                  padding: '5px'
                                }}
                              />
                            </View>
                          </>
                        );
                      })}

                      {observaciones?.map((obs: any) => {
                        return (
                          <>
                            <View style={style?.tableRow}>
                              <Text
                                style={{
                                  border: 0,
                                  width: "20%",
                                  fontSize: 11,
                                  padding: "1%",
                                  fontWeight: "bold",
                                  marginTop: -1,
                                }}
                              >
                                Observación:
                              </Text>
                              <Text
                                style={{
                                  border: 0,
                                  width: "85%",
                                  fontSize: 10,
                                  padding: "1%",
                                  fontWeight: "bold",
                                  marginTop: -1,
                                  marginLeft: -1,
                                }}
                              >
                                {obs.texto}
                              </Text>
                            </View>
                          </>
                        );
                      })}

                    </>
                  );
                })}
              </>
            );

          })}
        </View>
      </View>
    </>
  );
}

export default Dimension;
