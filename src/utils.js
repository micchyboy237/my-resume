export const scrollToHash = () => {
  const hash = window.location.hash.substr(1);

  setTimeout(() => {
    var elm = document.getElementById(hash);

    elm.scrollIntoView({ behavior: 'smooth' });
  }, 0);
};
