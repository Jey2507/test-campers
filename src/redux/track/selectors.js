export const selectTracks = (state) => state.track.items

export const selectTrackById = (state) => state.track.currentItem

export const selectLoading = (state) => state.track.loading;

export const selectError = (state) => state.track.error;