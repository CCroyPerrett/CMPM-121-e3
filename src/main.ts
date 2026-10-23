const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace() {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "A Vampiric Face");

  for (let i = 0; i < 20; i++) { //hair under face
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );
    if (i < 11) {
      hairstrand.setAttribute(
        "points",
        `${30 + i * 6.5},${60 - i * 3} ${45 + i * 6.5},${60 - i * 3} ${
          38.5 + i * 6.5
        },${235 - (i + 11) * 3}`,
      );
    } else {
      hairstrand.setAttribute(
        "points",
        `${30 + i * 6.5},${0 + i * 3} ${45 + i * 6.5},${0 + i * 3} ${
          38.5 + i * 6.5
        },${145 + i * 3}`,
      );
    }
    hairstrand.setAttribute("fill", "dark grey");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");

    face.append(hairstrand);
  }

  for (let i = 0; i < 10; i++) { //horizontal hair face
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );

    hairstrand.setAttribute(
      "points",
      `${30 + i * 6.5},${60 - i * 3} ${30 + i * 6.5},${75 - i * 3} ${i * 6.5},${
        120 + i * 10
      }`,
    );
    hairstrand.setAttribute("fill", "dark grey");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");
    face.append(hairstrand);
  }
  for (let i = 0; i < 10; i++) {
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );

    hairstrand.setAttribute(
      "points",
      `${150 - i * 6.5},${30 - i * 3} ${150 - i * 6.5},${45 - i * 3} ${
        200 - i * 6.5
      },${120 + i * 10}`,
    );
    hairstrand.setAttribute("fill", "dark grey");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");
    face.append(hairstrand);
  }

  for (let i = 0; i < 15; i++) { //shirt
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );

    hairstrand.setAttribute(
      "points",
      `${50 + i * 6},${150} ${65 + i * 6},${150} ${58.5 + i * 6},${250}`,
    );

    hairstrand.setAttribute("fill", "red");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");

    face.append(hairstrand);
  }

  for (let i = 0; i < 12; i++) { //pearl necklace
    const pearl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse",
    );

    pearl.setAttribute("cx", `${70 + i * 5}`);
    pearl.setAttribute("cy", "185");
    pearl.setAttribute("rx", "6");
    pearl.setAttribute("ry", "6");
    pearl.setAttribute("fill", "white");
    pearl.setAttribute("stroke", "#302c29");
    pearl.setAttribute("stroke-width", "1");

    face.append(pearl);
  }

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
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

  const leftlash = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  leftlash.setAttribute("x1", "65");
  leftlash.setAttribute("y1", "75");
  leftlash.setAttribute("x2", "75");
  leftlash.setAttribute("y2", "85");
  leftlash.setAttribute("stroke", "#302c29");
  leftlash.setAttribute("stroke-width", "4");
  face.append(leftlash);

  const rightlash = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  rightlash.setAttribute("x1", "136");
  rightlash.setAttribute("y1", "75");
  rightlash.setAttribute("x2", "126");
  rightlash.setAttribute("y2", "85");
  rightlash.setAttribute("stroke", "#302c29");
  rightlash.setAttribute("stroke-width", "4");
  face.append(rightlash);

  const leftiris = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftiris.setAttribute("cx", "72");
  leftiris.setAttribute("cy", "82");
  leftiris.setAttribute("rx", "3");
  leftiris.setAttribute("ry", "5");
  leftiris.setAttribute("fill", "red");
  face.append(leftiris);

  const rightiris = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightiris.setAttribute("cx", "128");
  rightiris.setAttribute("cy", "82");
  rightiris.setAttribute("rx", "3");
  rightiris.setAttribute("ry", "5");
  rightiris.setAttribute("fill", "red");
  face.append(rightiris);

  const rightbrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  rightbrow.setAttribute("x1", "119");
  rightbrow.setAttribute("y1", "78");
  rightbrow.setAttribute("x2", "139");
  rightbrow.setAttribute("y2", "68");
  rightbrow.setAttribute("stroke", "black");
  rightbrow.setAttribute("stroke-width", "3");
  face.append(rightbrow);

  const leftbrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  leftbrow.setAttribute("x1", "80");
  leftbrow.setAttribute("y1", "78");
  leftbrow.setAttribute("x2", "60");
  leftbrow.setAttribute("y2", "68");
  leftbrow.setAttribute("stroke", "black");
  leftbrow.setAttribute("stroke-width", "3");
  face.append(leftbrow);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const mouthx = 100;
  const mouthy = 250;
  const mouthradius = 50;

  const mouthdata = `M ${
    mouthx - mouthradius
  } ${mouthy} A ${mouthradius} ${mouthradius} 0 0 0 ${
    mouthx + mouthradius
  } ${mouthy}`;

  mouth.setAttribute("d", mouthdata);
  mouth.setAttribute("fill", "none");
  mouth.setAttribute("stroke", "black");
  mouth.setAttribute("stroke-width", "5");
  mouth.setAttribute("style", "transform: scaleY(0.5); transform-origin: top;");
  face.append(mouth);

  for (let i = 0; i < 20; i++) { //behind face
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );
    if (i < 11) {
      hairstrand.setAttribute(
        "points",
        `${30 + i * 6.5},${60 - i * 3} ${45 + i * 6.5},${60 - i * 3} ${
          38.5 + i * 6.5
        },${30 - i * 3}`,
      );
    } else {
      hairstrand.setAttribute(
        "points",
        `${30 + i * 6.5},${0 + i * 3} ${45 + i * 6.5},${0 + i * 3} ${
          38.5 + i * 6.5
        },${-30 + i * 3}`,
      );
    }
    hairstrand.setAttribute("fill", "dark grey");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");

    face.append(hairstrand);
  }

  for (let i = 0; i < 10; i++) { //forehead hair
    const hairstrand = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );

    hairstrand.setAttribute(
      "points",
      `${35 + i * 13},${35} ${45 + i * 13},${35} ${38.5 + i * 13},${80}`,
    );

    hairstrand.setAttribute("fill", "dark grey");
    hairstrand.setAttribute("stroke", "black");
    hairstrand.setAttribute("stroke-width", "2");

    face.append(hairstrand);
  }

  const tooth1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  tooth1.setAttribute("points", "70,145 80,148 75,157");
  tooth1.setAttribute("fill", "white");
  tooth1.setAttribute("stroke", "black");
  tooth1.setAttribute("stroke-width", "2");
  face.append(tooth1);

  const tooth2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  tooth2.setAttribute("points", "130,145 120,148 125,157");
  tooth2.setAttribute("fill", "white");
  tooth2.setAttribute("stroke", "black");
  tooth2.setAttribute("stroke-width", "2");
  face.append(tooth2);

  const ear1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  ear1.setAttribute("points", "25,95 25,115 5,85");
  ear1.setAttribute("fill", "#f3cf87");
  ear1.setAttribute("stroke", "black");
  ear1.setAttribute("stroke-width", "2");
  face.append(ear1);

  const ear2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  ear2.setAttribute("points", "175,95 175,115 200,85");
  ear2.setAttribute("fill", "#f3cf87");
  ear2.setAttribute("stroke", "black");
  ear2.setAttribute("stroke-width", "2");
  face.append(ear2);
  return face;
}
// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = buildFace();

portrait.append(face);
spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});

const numofshapes = document.querySelectorAll("#portrait svg polygon").length +
  document.querySelectorAll("#portrait svg line").length +
  document.querySelectorAll("#portrait svg ellipse").length;

console.log(
  "Num of shapes is: " + numofshapes,
);
