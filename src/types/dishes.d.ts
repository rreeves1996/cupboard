type DashboardDishData = {
  aggregateLikes: number;
  analyzedInstructions: Array;
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: Array;
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  lowFodmap: boolean;
  nutrition: {
    caloricBreakdown: object;
    flavonoids: Array;
    ingredients: Array;
    nutrients: Nutrient[];
    properties: Array;
    weightPerServing: {
      amount: number;
      units: string;
    };
  };
  occasions: Array;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
};

type Nutrient = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};
