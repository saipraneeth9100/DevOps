let count = 0;
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const loader = document.getElementById("loader");

let interval = setInterval(() => {
count += 2;
bar.style.width = count + "%";
percent.innerText = count + "%";

if (count >= 100) {
clearInterval(interval);
loader.style.display = "none";
}
}, 30);

/* COUNTER */
document.querySelectorAll("[data-count]").forEach(el => {
let target = +el.dataset.count;
let current = 0;

let step = setInterval(() => {
current += target / 50;
el.innerText = Math.floor(current);

```
if (current >= target) {
  el.innerText = target;
  clearInterval(step);
}
```

}, 40);
});
