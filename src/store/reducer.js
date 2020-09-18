const initialState = {
  searchTerm: "",
  selectedArtist: JSON.parse(localStorage.getItem('selectedArtist')) || null,
  favoriteArtists: JSON.parse(localStorage.getItem('favoriteArtists')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SELECT_ARTIST":
      return { ...state, selectedArtist: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favoriteArtists: state.favoriteArtists.concat(action.payload) };
    case "REMOVE_FROM_FAVORITES":
      return { ...state, favoriteArtists: state.favoriteArtists.filter(favoriteArtist => favoriteArtist.id !== action.payload.id) };
    default:
      return state;
  }
};

export default reducer;
