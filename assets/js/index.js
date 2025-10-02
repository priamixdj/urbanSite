// Create a black circle element
const circle = document.createElement('div');
    circle.classList.add('CircleMouse');
    circle.id = 'CircleMouse';

// document.body.appendChild(circle);

// cerchio del mouse
// document.addEventListener('mousemove', (event) => {
//     circle.style.left = `${event.pageX - 10}px`; // center the circle on the cursor
//     circle.style.top = `${event.pageY - 10}px`;
// })

// refresh della cache
if (!window.location.search.includes('cache=')) {
  const url = window.location.pathname + '?cache=' + Date.now();
  window.location.replace(url); // meglio di location.href per evitare doppio "indietro"
}

