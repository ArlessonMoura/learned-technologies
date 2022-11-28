// ESTA FUNÇÃO RECEBE COMO PARÂMETRO OS DADOS COM AS INFORMAÇÕES E UTILIZA AS RELACIONADAS AOS INGREDIENTES PARA RETORNAR COMO UM ARRAY DE OBJETOS

// 1 - ARMAZENA TODAS AS CHAVES RELACIONADAS AOS NOMES DOS INGREDIENTES
// 2 - ARMAZENA TODAS AS CHAVES RELACIONADAS AS QUANTIDADES DOS INGREDIENTES
// 3 - CRIA O ARRAY ONDE SERÁ ARMAZENADO OS OBJETOS CONTENDO AS INFORMAÇÕES, INICIALMENTE VAZIO
// 4 - COM forEach IRÁ VERICAR SE CADA UMA DAS CHAVES DOS NOMES DOS INGREDIENTES POSSUI VALOR, SE SIM, IRÁ MONTAR UM OBJETO
// 5 - NESTE OBJETO, NAME IRÁ ARMAZENAR O NOME DO INGREDIENTE NA CHAVE NAME
// 6 - TAMBÉM IRA ARMAZENAR A QUANTIDADE NA CHAVE MEASURE
// 7 - ESTE OBJETO SERÁ ARMAZENADO COM push(obj) NO ARRAY DE OBJETOS ingredientsAndMesure
// 8 - IRÁ RETORNAR [{name: ingredienteA, measure: qdtA}, {name: B, measure: qtdB}, ...]

export default function objToArryOfObj(data) {
  const ingedientsKeys = (Object.keys(data))
    .filter((key) => key.includes('strIngredient'));
  const measureKeys = (Object.keys(data))
    .filter((key) => key.includes('strMeasure'));
  const ingredientsAndMesure = [];
  ingedientsKeys.forEach((key, index) => {
    if (data[key]) {
      const obj = {
        name: data[key],
        measure: data[measureKeys[index]],
      };
      ingredientsAndMesure.push(obj);
    }
  });
  return ingredientsAndMesure;
}

// PODERIA ADICONAR O OBJ AO ARRAY COM
// let ingredientsAndMesure = [];
// ingredientsAndMesure = [...ingredientsAndMesure, obj];
