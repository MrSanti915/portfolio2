const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav2');

const burgerIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="size-6" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
`;

const closeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="size-6" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M6 6l12 12M18 6l-12 12" />
  </svg>
`;

ham.onclick = () => {
  const isOpen = nav.classList.toggle("active");
  ham.classList.toggle("is-open", isOpen);
  ham.innerHTML = isOpen ? closeIcon : burgerIcon;
};
