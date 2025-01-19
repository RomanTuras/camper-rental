export const selectCampers = state => state.campers.data;

export const selectCamper = state => state.campers.data.item;

export const selectCampersIsLoading = state => state.campers.isLoading;

export const selectCampersIsLoadingMore = state => state.campers.isLoadingMore;

export const selectCampersError = state => state.campers.error;
