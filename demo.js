const RGBAtoHex = (str) => {
  var strNew = str.slice(5, -1);
  const [r, g, b, a = 1] = JSON.parse(`[${strNew}]`);

  if (a < 0 || a > 1) {
    console.error(`Invalid alpha value: ${a}`);
    return;
  }
  const rgba = [r, g, b, ...(a === 1 ? [] : [Math.round(a * 255)])];
  return "#" + rgba.map((v) => v.toString(16)).join("");
};

console.log(RGBAtoHex("rbga(240, 240, 240, 0.8)")); // #f0f0f0cc
