const pixelCanvas = document.getElementById("scene");
const ctx = pixelCanvas.getContext("2d");

const base = { w: pixelCanvas.width, h: pixelCanvas.height };
ctx.imageSmoothingEnabled = false;

const palette = {
  skyTop: "#cfe8ff",
  skyBottom: "#8dc7f2",
  sun: "#ffd79a",
  mountain: "#6f7888",
  mountainDark: "#4e5562",
  flatiron: "#c98a5a",
  flatironShade: "#a56f4a",
  pine: "#2f5b3b",
  pineDark: "#24442f",
  ground: "#cfa06b",
  trail: "#b4804f",
  trailDark: "#99633c",
  fence: "#9b6a3f",
  fenceDark: "#7a512f",
  snow: "#eef2f5",
  grass: "#9bb26a",
  grassDark: "#7e9952",
  ring: "#ffd27a",
  jacket: "#8b4c4c",
  jacketDark: "#6f3a3a",
  jacket2: "#3c6c8f",
  jacket2Dark: "#2e536b",
  pants2: "#3b3f45",
  hat2: "#5b4a2b",
  hair2: "#3a2418",
  skin: "#f1c9a5",
  hair: "#2b2018",
  beard: "#221912",
  sunglasses: "#1f1f1f",
  cap: "#c7a066",
  shirt: "#1f3b63",
  camelbak: "#4a6b4a",
  pants: "#2d2d2d",
  boots: "#4a3422",
  socks: "#d9d0c8",
  hat: "#596b3c",
  white: "#f4f1ea",
  shorts: "#1a1a1a",
  bubble: "#f9f7f2",
  bubbleBorder: "#2a2a2a",
  text: "#1b1b1b",
  heart: "#ff6b88",
  tear: "#5ab2ff",
  camera: "#2f2f2f",
  flash: "#fff5c9",
  sparkle: "#ffe6a6",
};


const layout = {
  horizon: 110,
  groundStart: 172,
  groundY: 214,
};

function normalizeSprite(lines) {
  const width = Math.max(...lines.map((line) => line.length));
  return lines.map((line) => line.padEnd(width, "."));
}

const sprites = {
  maleStand: normalizeSprite([
    "....CCCC....",
    "...CCHHCC...",
    "...HHYYHH...",
    "...HSYYSH...",
    "...HSSSSH...",
    "...HBBBBH...",
    "...HBBBBH...",
    "..NNMMNNN...",
    "..NNNMMNN...",
    "..NNNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...PP..PP...",
    "...PP..PP...",
    "...PP..PP...",
    "...UU..UU...",
    "..UU....UU..",
    "............",
  ]),
  maleKneel: normalizeSprite([
    "....CCCC....",
    "...CCHHCC...",
    "...HHYYHH...",
    "...HSYYSH...",
    "...HSSSSH...",
    "...HBBBBH...",
    "...HBBBBH...",
    "..NNMMNNN...",
    "..NNNMMNN...",
    "..NNNNNNSS..",
    "...NNNNNSSS.",
    "...NNNNNN...",
    "...PPPPP....",
    "...PPPP.....",
    "..UUU.......",
    "..UUU..UU...",
    "..UU....UU..",
    "..U.........",
  ]),
  maleKneelRight: normalizeSprite([
    "....CCCC....",
    "...CCHHCC...",
    "...HHYYHH...",
    "...HSYYSH...",
    "...HSSSSH...",
    "...HBBBBH...",
    "...HBBBBH...",
    "..NNMMNNN...",
    "..NNNMMNN...",
    "..NNNNNNSS..",
    "...NNNNNSSS.",
    "...NNNNNN...",
    "...PPPPP....",
    "...PPPP.....",
    ".......UUU..",
    "...UU..UUU..",
    "..UU....UU..",
    ".........U..",
  ]),
  maleBackStand: normalizeSprite([
    "....CCCC....",
    "...CCHHCC...",
    "...CHHHHC...",
    "...CHHHHC...",
    "...NNMMNN...",
    "...NNMMNN...",
    "...NNMMNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...PP..PP...",
    "...PP..PP...",
    "...PP..PP...",
    "...UU..UU...",
    "..UU....UU..",
    "............",
  ]),
  maleBackKneel: normalizeSprite([
    "....CCCC....",
    "...CCHHCC...",
    "...CHHHHC...",
    "...CHHHHC...",
    "...NNMMNN...",
    "...NNMMNN...",
    "...NNMMNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...NNNNNN...",
    "...PPPPP....",
    "...PPPP.....",
    "..UUU.......",
    "..UUU.......",
    "............",
    "............",
  ]),
  femaleStand: normalizeSprite([
    "..GGGG....",
    "..GHHHG...",
    "..HHHHH...",
    "..HSSSH...",
    ".HSSSSS..",
    ".HSSSSS..",
    "HWWWWWH..",
    "HWWWWWH..",
    "..WWWW...",
    "..KKKK...",
    "..KKKK...",
    "...KK....",
    "..BB..BB.",
    "..BB..BB.",
    "..OO..OO.",
    "..........",
  ]),
  femaleHands: normalizeSprite([
    "..GGGG....",
    "..GHHHG...",
    "..HHHHH...",
    ".SSSSSS..",
    ".HSSSSS..",
    ".HSSSSS..",
    "HWWWWWH..",
    "HWWWWWH..",
    "..WWWW...",
    "..KKKK...",
    "..KKKK...",
    "...KK....",
    "..BB..BB.",
    "..BB..BB.",
    "..OO..OO.",
    "..........",
  ]),
  femaleBackStand: normalizeSprite([
    "..GGGG....",
    "..GHHHG...",
    "..HHHHH...",
    "..HHHHH...",
    "HWWWWWH...",
    "HWWWWWH...",
    "..WWWW...",
    "..KKKK...",
    "..KKKK...",
    "...KK....",
    "..BB..BB.",
    "..BB..BB.",
    "..OO..OO.",
    "..........",
    "..........",
    "..........",
  ]),
  femaleBackHands: normalizeSprite([
    "..GGGG....",
    "..GHHHG...",
    "..HHHHH...",
    ".SSSSSS..",
    "HWWWWWH...",
    "HWWWWWH...",
    "..WWWW...",
    "..KKKK...",
    "..KKKK...",
    "...KK....",
    "..BB..BB.",
    "..BB..BB.",
    "..OO..OO.",
    "..........",
    "..........",
    "..........",
  ]),
  onlookerMale: normalizeSprite([
    "....XXXX....",
    "...XAAAAA...",
    "...AASSSA...",
    "...ASSSSA...",
    "..RRRRRRRR..",
    "..RrrrrrR...",
    "..RRRRRRR...",
    "...TTTTTT...",
    "...TTTTTT...",
    "...TT..TT...",
    "..UU..UU....",
    "............",
  ]),
  onlookerFemale: normalizeSprite([
    "..AAAAAA....",
    "..AASSSAA...",
    "..ASSSSSA...",
    "..ASSSSSA...",
    "..JJJJJJJ...",
    "..JjjjjjJ...",
    "..JJJJJJJ...",
    "...TTTTTT...",
    "...TTTTTT...",
    "...TT..TT...",
    "..UU..UU....",
    "............",
  ]),
};

const spriteColors = {
  C: palette.cap,
  H: palette.hair,
  G: palette.hat,
  S: palette.skin,
  B: palette.beard,
  N: palette.shirt,
  M: palette.camelbak,
  P: palette.pants,
  U: palette.boots,
  W: palette.white,
  K: palette.shorts,
  O: palette.socks,
  Y: palette.sunglasses,
  R: palette.jacket,
  r: palette.jacketDark,
  J: palette.jacket2,
  j: palette.jacket2Dark,
  T: palette.pants2,
  X: palette.hat2,
  A: palette.hair2,
};

function drawSprite(lines, x, y, scale = 1, extraMap = {}, flipX = false) {
  const map = { ...spriteColors, ...extraMap };
  const width = lines[0]?.length ?? 0;
  lines.forEach((line, row) => {
    for (let col = 0; col < line.length; col += 1) {
      const ch = line[col];
      if (ch === ".") {
        continue;
      }
      const color = map[ch];
      if (!color) {
        continue;
      }
      const dx = flipX ? width - 1 - col : col;
      ctx.fillStyle = color;
      ctx.fillRect(x + dx * scale, y + row * scale, scale, scale);
    }
  });
}

function drawPixelTriangle(cx, baseY, width, height, color) {
  ctx.fillStyle = color;
  for (let y = 0; y < height; y += 1) {
    const rowWidth = Math.max(1, Math.round(width - (y / height) * width));
    const startX = Math.round(cx - rowWidth / 2);
    ctx.fillRect(startX, baseY - y, rowWidth, 1);
  }
}

function drawFlatIron(x, baseY, width, height, lean) {
  for (let y = 0; y < height; y += 1) {
    const rowWidth = Math.max(1, Math.round(width - (y / height) * width * 0.75));
    const startX = Math.round(x + (y / height) * lean);
    ctx.fillStyle = y % 4 === 0 ? palette.flatironShade : palette.flatiron;
    ctx.fillRect(startX, baseY - y, rowWidth, 1);
  }
}

function drawPine(x, baseY, height) {
  for (let y = 0; y < height; y += 1) {
    const rowWidth = Math.max(1, Math.round(((height - y) / height) * 8));
    const startX = Math.round(x - rowWidth / 2);
    ctx.fillStyle = y % 2 === 0 ? palette.pine : palette.pineDark;
    ctx.fillRect(startX, baseY - y, rowWidth, 1);
  }
  ctx.fillStyle = palette.pineDark;
  ctx.fillRect(x, baseY + 1, 2, 5);
}

function drawFence(x, y, length) {
  ctx.fillStyle = palette.fence;
  ctx.fillRect(x, y, length, 6);
  ctx.fillRect(x, y + 8, length, 6);
  ctx.fillStyle = palette.fenceDark;
  ctx.fillRect(x - 4, y - 4, 8, 24);
  ctx.fillRect(x + length - 4, y - 4, 8, 24);

  for (let i = 0; i < length; i += 18) {
    ctx.fillRect(x + i, y + 2, 4, 18);
  }
}

function drawBush(x, y, width, height) {
  ctx.fillStyle = palette.pineDark;
  for (let i = 0; i < width; i += 2) {
    const peak = Math.round(Math.sin((i / width) * Math.PI) * height);
    ctx.fillRect(x + i, y - peak, 2, peak + 2);
  }
  ctx.fillStyle = palette.pine;
  ctx.fillRect(x + 2, y - Math.round(height * 0.6), width - 4, 3);
}

function drawSnowPatch(x, y, width, height) {
  ctx.fillStyle = palette.snow;
  for (let i = 0; i < width; i += 2) {
    const rise = Math.round(Math.sin((i / width) * Math.PI) * height);
    ctx.fillRect(x + i, y - rise, 2, rise + 2);
  }
}

function drawGrassTuft(x, y, height) {
  ctx.fillStyle = palette.grassDark;
  ctx.fillRect(x, y - height, 2, height);
  ctx.fillStyle = palette.grass;
  ctx.fillRect(x + 2, y - Math.round(height * 0.7), 2, Math.round(height * 0.7));
}

function drawTrail(groundY) {
  ctx.fillStyle = palette.ground;
  ctx.fillRect(0, groundY, base.w, base.h - groundY);

  for (let y = groundY; y < base.h; y += 1) {
    const t = (y - groundY) / (base.h - groundY);
    const half = Math.round(28 + t * 140);
    ctx.fillStyle = y % 2 === 0 ? palette.trail : palette.trailDark;
    ctx.fillRect(Math.round(base.w / 2 - half), y, half * 2, 1);
  }
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, base.h);
  gradient.addColorStop(0, palette.skyTop);
  gradient.addColorStop(0.7, palette.skyBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, base.w, base.h);

  ctx.fillStyle = palette.sun;
  ctx.fillRect(36, 26, 12, 12);

  const { horizon, groundStart } = layout;
  drawPixelTriangle(130, horizon + 6, 270, 116, palette.mountain);
  drawPixelTriangle(360, horizon + 10, 300, 130, palette.mountainDark);

  drawFlatIron(190, horizon + 12, 52, 86, 16);
  drawFlatIron(292, horizon + 10, 82, 122, 22);
  drawFlatIron(346, horizon + 12, 72, 114, 20);

  ctx.fillStyle = palette.ground;
  ctx.fillRect(0, horizon, base.w, groundStart - horizon);

  drawSnowPatch(40, groundStart - 10, 80, 16);
  drawSnowPatch(140, groundStart - 8, 100, 14);
  drawSnowPatch(300, groundStart - 12, 120, 18);
  drawSnowPatch(380, groundStart - 6, 70, 12);

  for (let i = 0; i < 20; i += 1) {
    drawPine(8 + i * 18, horizon + 10, 34 + (i % 4) * 8);
  }
  for (let i = 0; i < 14; i += 1) {
    drawPine(20 + i * 28, horizon + 30, 50 + (i % 3) * 12);
  }
  for (let i = 0; i < 12; i += 1) {
    drawPine(10 + i * 34, groundStart + 6, 62 + (i % 4) * 12);
  }

  drawPine(18, groundStart + 34, 84);
  drawPine(base.w - 28, groundStart + 36, 86);

  drawTrail(groundStart);
  drawFence(140, groundStart - 8, 320);

  drawBush(0, base.h - 6, 140, 34);
  drawBush(base.w - 150, base.h - 10, 150, 36);
  drawBush(70, base.h - 14, 120, 26);
  drawBush(220, base.h - 18, 110, 24);
  drawBush(30, groundStart + 10, 90, 22);
  drawBush(base.w - 140, groundStart + 12, 100, 24);
  drawBush(60, groundStart + 28, 80, 20);
  drawBush(base.w - 200, groundStart + 30, 80, 20);

  for (let i = 0; i < 22; i += 1) {
    drawGrassTuft(20 + i * 20, groundStart + 10 + (i % 3) * 6, 10 + (i % 4) * 4);
  }
}

function wrapText(drawCtx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = words[0];
  for (let i = 1; i < words.length; i += 1) {
    const word = words[i];
    const test = `${current} ${word}`;
    if (drawCtx.measureText(test).width <= maxWidth) {
      current = test;
    } else {
      lines.push(current);
      current = word;
    }
  }
  lines.push(current);
  return lines;
}

function drawBubble(text, anchorX, anchorY) {
  ctx.font = '10px "Press Start 2P"';
  const maxWidth = 240;
  const lines = wrapText(ctx, text, maxWidth);
  const lineHeight = 12;
  const padding = 7;
  const width = Math.min(
    maxWidth,
    Math.max(...lines.map((line) => ctx.measureText(line).width))
  );
  const height = lines.length * lineHeight + padding * 2;
  let x = Math.round(anchorX - width / 2 - padding);
  const y = Math.round(anchorY - height - 12);

  x = Math.max(6, Math.min(x, base.w - width - padding * 2 - 6));

  ctx.fillStyle = palette.bubble;
  ctx.fillRect(x, y, width + padding * 2, height);
  ctx.strokeStyle = palette.bubbleBorder;
  ctx.strokeRect(x, y, width + padding * 2, height);

  ctx.fillStyle = palette.bubble;
  ctx.fillRect(anchorX - 2, y + height, 4, 4);
  ctx.fillStyle = palette.bubbleBorder;
  ctx.fillRect(anchorX - 1, y + height, 2, 1);

  ctx.fillStyle = palette.text;
  lines.forEach((line, index) => {
    ctx.fillText(line, x + padding, y + padding + lineHeight * (index + 1) - 3);
  });
}

function drawHeart(x, y) {
  const shape = ["01010", "11111", "11111", "01110", "00100"];
  shape.forEach((row, ry) => {
    for (let rx = 0; rx < row.length; rx += 1) {
      if (row[rx] === "1") {
        ctx.fillStyle = palette.heart;
        ctx.fillRect(x + rx, y + ry, 1, 1);
      }
    }
  });
}

function drawCamera(x, y, flashOn) {
  ctx.fillStyle = palette.camera;
  ctx.fillRect(x, y, 10, 6);
  ctx.fillRect(x + 2, y - 3, 6, 3);
  ctx.fillRect(x + 4, y + 2, 2, 2);

  if (flashOn) {
    ctx.fillStyle = palette.flash;
    ctx.fillRect(x + 12, y - 9, 8, 8);
    ctx.fillRect(x + 15, y - 13, 2, 4);
    ctx.fillRect(x + 15, y - 1, 2, 4);
    ctx.fillRect(x + 9, y - 7, 4, 2);
    ctx.fillRect(x + 19, y - 7, 4, 2);

    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.fillRect(x + 4, y - 14, 20, 20);
    ctx.restore();
  }
}

function drawSparkle(x, y) {
  ctx.fillStyle = palette.sparkle;
  ctx.fillRect(x, y, 1, 3);
  ctx.fillRect(x - 1, y + 1, 3, 1);
}

function drawRing(x, y) {
  ctx.fillStyle = palette.ring;
  ctx.fillRect(x, y, 3, 1);
  ctx.fillRect(x, y + 1, 1, 1);
  ctx.fillRect(x + 2, y + 1, 1, 1);
  ctx.fillRect(x, y + 2, 3, 1);
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const sceneDuration = 18;
const start = performance.now();

function drawScene(time) {
  drawBackground();

  const { groundY } = layout;
  const bob = 0;
  const heroScale = 4;
  const phase1 = 3;
  const phase2 = 5;
  const phase3 = 7;
  const phase4 = 12;
  const phase5 = 16;

  let maleX = 262;
  let femaleX = 200;
  let walkY = groundY;
  let malePose = sprites.maleStand;
  let femalePose = sprites.femaleStand;
  let bubble = null;

  if (time < phase1) {
    const p = easeInOut(time / phase1);
    maleX = Math.round(250 + p * 12);
    femaleX = Math.round(maleX - 62);
    walkY = Math.round(base.h + 60 - p * (base.h + 60 - groundY));
  }

  const maleFlip = femaleX < maleX;

  if (time >= phase2 && time < phase3) {
    bubble = {
      text: "I'm going to do something a little crazy.",
      x: maleX + 32,
      y: groundY - 56,
    };
  }

  if (time >= phase3 && time < phase4) {
    malePose = maleFlip ? sprites.maleKneelRight : sprites.maleKneel;
    bubble = {
      text: "I'm going to do something a little crazy.",
      x: maleX + 32,
      y: groundY - 58,
    };
  }

  if (time >= phase4) {
    malePose = maleFlip ? sprites.maleKneelRight : sprites.maleKneel;
    femalePose = sprites.femaleHands;
    bubble = {
      text: "You want to keep me?",
      x: femaleX + 28,
      y: groundY - 58,
    };
  }

  if (time >= phase4) {
    const lookerProgress = Math.min(1, (time - phase4) / 4);
    const lookerScale = heroScale;
    const lookerStartX = 410;
    const lookerTargetX = 372;
    const lookerX = Math.round(
      lookerStartX + (lookerTargetX - lookerStartX) * lookerProgress
    );
    const lookerTargetY = groundY + 22;
    const lookerWalkY = Math.round(
      base.h + 80 - lookerProgress * (base.h + 80 - lookerTargetY)
    );
    const lookerY =
      lookerWalkY - sprites.onlookerMale.length * lookerScale + 2;

    drawSprite(sprites.onlookerMale, lookerX, lookerY, lookerScale);
    drawSprite(
      sprites.onlookerFemale,
      lookerX + 28,
      lookerY + 8,
      lookerScale
    );
    const flashOn = Math.floor(time * 5) % 5 === 0;
    drawCamera(lookerX + 22, lookerY + 28, flashOn);
  }

  const maleY = Math.round(walkY - malePose.length * heroScale + bob);
  const femaleY = Math.round(walkY - femalePose.length * heroScale + bob + 4);

  drawSprite(malePose, maleX, maleY, heroScale, {}, maleFlip);
  drawSprite(femalePose, femaleX, femaleY, heroScale);

  if (time >= phase3) {
    const ringOffset = maleFlip ? 3 : 11;
    const ringX = maleX + heroScale * ringOffset;
    const ringY = maleY + heroScale * 9;
    drawRing(ringX, ringY);
    if (Math.floor(time * 6) % 3 === 0) {
      drawSparkle(ringX + 2, ringY - 2);
    }
  }

  if (time >= phase4) {
    ctx.fillStyle = palette.tear;
    ctx.fillRect(femaleX + 24, femaleY + 28, 4, 4);
    ctx.fillRect(femaleX + 34, femaleY + 30, 4, 4);
  }

  if (bubble) {
    drawBubble(bubble.text, bubble.x, bubble.y);
  }

  if (time >= phase5) {
    for (let i = 0; i < 6; i += 1) {
      const drift = (time - phase5) * 6 + i * 8;
      const hx = Math.round(220 + Math.sin((time + i) * 0.6) * 30 + i * 6);
      const hy = Math.round(80 - (drift % 50));
      drawHeart(hx, hy);
    }
  }

}

function loop(now) {
  const time = ((now - start) / 1000) % sceneDuration;
  drawScene(time);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
