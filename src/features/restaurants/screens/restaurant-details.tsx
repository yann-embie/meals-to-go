import { FC } from "react";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { RestaurantsScreenNavigationProp } from "./restaurants.types";

export const RestaurantDetailsScreen: FC<
  RestaurantsScreenNavigationProp<"RestaurantDetails">
> = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
