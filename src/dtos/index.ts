export interface IMealForm {
    id: string;
    name: string;
    description?: string;
    date: string;
    time: string;
    isOnDiet: boolean;
  }
  
export interface IGroupedMeals {
  id: string;
  date: string;
  data: IMealForm[];
}
