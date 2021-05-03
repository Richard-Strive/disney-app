export default function (state = {}, action) {
  switch (action.type) {
    case "SEL_MOVIE":
      return action.payload;
    default:
      return state;
  }
}
