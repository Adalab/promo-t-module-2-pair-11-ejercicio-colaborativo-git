const face = document.querySelector(".js_face");

face.addEventListener ('mouseover', (event) => {
  face.innerHTML = ';)';
})
face.removeEventListener('mouseleave');