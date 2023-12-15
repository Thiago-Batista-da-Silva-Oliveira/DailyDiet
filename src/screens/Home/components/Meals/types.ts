
export interface IMeal {
 id: string;
 date: string;
 data: {
  title: string;
  isOnDiet: boolean;
  time: string;
 }[];
}