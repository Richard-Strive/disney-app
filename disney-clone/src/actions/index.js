export default function (data) {
  return {
    type: "SEL_MOVIE",
    payload: data,
  };
}

export default function (data) {
  return {
    type: "LOG_IN",
    payload: data,
  };
}

export default function (data) {
  return {
    type: "LOG_OUT",
  };
}
