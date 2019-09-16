import { REMOVE_FEATURE, ADD_FEATURE } from "../actions";

// set up "empty" reducer and initial state

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      // select feature by id, add to car.features array and remove from store array
      const matchedStoreItem = state.store.find(item => {
        return item.id === action.payload.id;
      });
      console.log(matchedStoreItem);
      const newStore = state.store.filter(item => {
        return item.id !== matchedStoreItem.id;
      });
      console.log("newStore: ", newStore);

      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        store: [...newStore]
      };
    case REMOVE_FEATURE:
      const matchedFeatureItem = state.car.features.find(item => {
        return item.id === action.payload.id;
      });
      const newFeatures = state.car.features.filter(item => {
        return item.id !== matchedFeatureItem.id;
      });
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: { ...state.car, features: [...newFeatures] },
        store: [...state.store, action.payload]
      };
    default:
      return state;
  }
};
