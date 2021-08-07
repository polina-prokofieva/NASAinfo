const isScrolledToBottom = () => {
  const { scrollHeight, clientHeight } = document.body;
  const scrollPosition = window.pageYOffset;
  const fullHeight = scrollHeight - clientHeight;

  return fullHeight - scrollPosition < 100;
};

export { isScrolledToBottom };