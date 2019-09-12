export const REMOVE_FEATURE = "REMOVE_FEATURE";
export function removeExistingFeature(feature) {
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  };
}

export const ADD_FEATURE = "ADD_FEATURE";
export function addNewFeature(feature) {
  return {
    type: "ADD_FEATURE",
    payload: feature
  };
}
