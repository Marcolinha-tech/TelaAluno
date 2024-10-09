import React, { useState } from "react"; 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export const ResultadoAlunos = () => {
  const alunos = [
    { nome: "Aluno 1", acertos: 5, tentativas: 3, status: "Completo" },
    { nome: "Aluno 2", acertos: 0, tentativas: 2, status: "Incompleto" },
    { nome: "Aluno 3", acertos: 3, tentativas: 1, status: "Parcial" },
  ];

  const [informacoes, setInformacoes] = useState([]); // Controla quais alunos tiveram suas informações expandidas ou não.

  //Alterar estado, expandindo ou contraindo as informações do aluno ao clicar no botão.
  const handleButtonPress = (aluno) => { 
    setInformacoes((prev) =>
      prev.includes(aluno) ? prev.filter(item => item !== aluno) : [...prev, aluno]
    );
  };

  return (
    <View style={styles.resultadoAlunos}>

      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {alunos.map((aluno, index) => (

            <View key={index}>

              <View style={styles.overlap}>

                <Text style={styles.textWrapper}>Aluno: {aluno.nome}</Text>

                <View style={styles.overlapGroup}>

                  <TouchableOpacity style={styles.rectangle} onPress={() => handleButtonPress(aluno.nome)}>
                    <Text style={styles.arrow}>↓</Text>
                  </TouchableOpacity>

                </View>

              </View>
              {informacoes.includes(aluno.nome) && (
                <View style={styles.infoContainer}>

                  <Text style={styles.infoText}>Acertos: {aluno.acertos}</Text>

                  <Text style={styles.infoText}>Tentativas: {aluno.tentativas}</Text>

                  <Text style={styles.infoText}>Status: {aluno.status}</Text>
                  
                  <TouchableOpacity style={styles.verQuestaoButton}>
                    <Text style={styles.verQuestaoText}>Ver questão</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultadoAlunos: {
    backgroundColor: "#d6c4f7", 
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    width: "100%",
    height: "100%", 
    padding: 20, 
  },

  container: {
    backgroundColor: "#d6c4f7",
    borderRadius: 10,
    padding: 20, 
    width: 400,
    height: 400, 
    alignItems: "center", 
  },

  scrollContainer: {
    alignItems: "center", 
    paddingBottom: 20, 
  },

  overlap: {
    backgroundColor: "#f54f59", 
    borderRadius: 10,
    height: 47,
    width: 320,
    marginBottom: 30, 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 10, 
  },

  textWrapper: {
    color: "#ffffff",
    fontFamily: "Inder-Regular",
    fontSize: 12,
    fontWeight: "400",
    flex: 1, 
    textAlign: "left", 
  },

  overlapGroup: {
    borderRadius: 5,
    height: 23,
    justifyContent: "center", 
  },

  rectangle: {
    backgroundColor: "#ffb8bc", 
    borderRadius: 5,
    height: 23,
    width: 80, 
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    color: "#ffffff",
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: "400",
  },

  infoContainer: {
    backgroundColor: "#ffb8bc",
    borderRadius: 10,
    padding: 10,
    marginTop: -10, 
    width: 320,
    alignItems: "flex-start", 
    marginBottom: 30, 
  },

  infoText: {
    color: "#ffffff", 
    fontFamily: "Inder-Regular",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left", 
    width: "100%", 
  },

  verQuestaoButton: {
    backgroundColor: "#f54f59", 
    borderRadius: 5,
    marginTop: 10, 
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  
  verQuestaoText: {
    color: "#ffffff", 
    fontFamily: "Inder-Regular",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default ResultadoAlunos;