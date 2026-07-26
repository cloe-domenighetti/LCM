import { track, index, dots } from "./Layout.astro.0.mts";

export function updateSlider() {
track.style.transform = `translateX(-${index * 100}%)`;

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");
}
