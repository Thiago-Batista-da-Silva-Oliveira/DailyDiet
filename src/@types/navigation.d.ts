export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            new: undefined;
            detail: undefined;
            mealDetail: {
                id: string;
            };
            editMeal: {
                id: string;
            };
            feedback: {
                onDiet: boolean;
            }
        }
    }
}