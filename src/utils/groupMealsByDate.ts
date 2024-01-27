import { IGroupedMeals, IMealForm } from "@dtos/index";

export const groupByDate = (dados: IMealForm[]): IGroupedMeals[] => {
  const groupedData: { [key: string]: any[] } = {};

  // Agrupar os dados por data
  dados.forEach((item) => {
    const dataFormatada = item.date;
    
    if (!groupedData[dataFormatada]) {
      groupedData[dataFormatada] = [];
    }

    groupedData[dataFormatada].push({
      id: item.id,
      name: item.name,
      isOnDiet: item.isOnDiet,
      time: item.time,
    });
  });

  // Converter o objeto de volta para um array
  const resultArray = Object.keys(groupedData).map((date) => ({
    id: date,
    date,
    data: groupedData[date],
  }));

  return resultArray;
};
