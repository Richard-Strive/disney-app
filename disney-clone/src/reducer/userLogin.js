export default function (state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      };
    case "LOG_OUT":
      return { name: null, email: null, photo: null };
    default:
      return state;
  }
}
