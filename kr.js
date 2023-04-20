const allHeaders = document.querySelectorAll(".header");

const toggleOpen = (Event) => {
  const { currentTarget } = Event;
  currentTarget.parentElement.classList.toggle("open");
};

const bindClickEvent = (header) => {
  header.addEventListener("click", toggleOpen);
};
allHeaders.forEach(bindClickEvent);
