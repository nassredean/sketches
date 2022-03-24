export function debounce(callback, duration) {
  let timer;
  return (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(event);
    }, duration);
  };
}
