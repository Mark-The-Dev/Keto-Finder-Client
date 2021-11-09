export interface RestaurantBundleDTO {
  restaurantName: string;
  restaurantMeals: RestaurantItem[];
}

export interface RestaurantItem {
  mealName: string;
  mealDescription: string;
  calories: number;
  proteinValue: number;
  fatValue: number;
  carbValue: number;
  netCarbValue: number;
}
