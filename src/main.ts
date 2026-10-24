const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A Shaded, Open-mouthed face");

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const headgradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
headgradient.setAttribute("id", "headgradient");
headgradient.setAttribute("x1", "0%");
headgradient.setAttribute("y1", "0%");
headgradient.setAttribute("x2", "80%");
headgradient.setAttribute("y2", "80%");

const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop3.setAttribute("offset", "0%");
stop3.setAttribute("stop-color", "#f7ff5a");

const stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop4.setAttribute("offset", "100%");
stop4.setAttribute("stop-color", "#7b784b");
headgradient.appendChild(stop3);
headgradient.appendChild(stop4);
defs.appendChild(headgradient);
face.appendChild(defs);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
//head.setAttribute("fill", "#f3cf87");
head.setAttribute("fill", "url(#headgradient)");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

const toungegradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
toungegradient.setAttribute("id", "toungegradient");
toungegradient.setAttribute("x1", "0%");
toungegradient.setAttribute("y1", "0%");
toungegradient.setAttribute("x2", "0%");
toungegradient.setAttribute("y2", "100%");

// 4. Create and add color stops to the gradient
const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "#000000");

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "#cc0000");
toungegradient.appendChild(stop1);
toungegradient.appendChild(stop2);
defs.appendChild(toungegradient);
face.appendChild(defs);

const tounge = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
tounge.setAttribute("cx", "100");
tounge.setAttribute("cy", "140");
tounge.setAttribute("rx", "30");
tounge.setAttribute("ry", "15");
tounge.setAttribute("stroke", "#302c29");
tounge.setAttribute("stroke-width", "4");
tounge.setAttribute("fill", "url(#toungegradient)");
face.append(tounge);

portrait.append(face);
spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
