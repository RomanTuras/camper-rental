export const selectCampers = state => state.campers.data;

export const selectCamper = state => state.campers.data.item;

export const selectCampersIsLoading = state => state.campers.isLoading;

export const selectCampersError = state => state.campers.error;

