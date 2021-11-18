export interface RestaurantBundleDTO {
  restaurantId: number;
  restaurantName: string;
  restaurantItems: RestaurantItem[];
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
