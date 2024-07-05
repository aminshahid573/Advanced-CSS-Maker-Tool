const box = document.getElementById("box");
const widthRange = document.getElementById("widthRange");
const heightRange = document.getElementById("heightRange");
const bgColorPicker = document.getElementById("bgColorPicker");
const borderTopLeftRadiusRange = document.getElementById(
  "borderTopLeftRadiusRange"
);
const borderTopRightRadiusRange = document.getElementById(
  "borderTopRightRadiusRange"
);
const borderBottomRightRadiusRange = document.getElementById(
  "borderBottomRightRadiusRange"
);
const borderBottomLeftRadiusRange = document.getElementById(
  "borderBottomLeftRadiusRange"
);
const borderWidthRange = document.getElementById("borderWidthRange");
const borderColorPicker = document.getElementById("borderColorPicker");
const boxShadowHOffsetRange = document.getElementById("boxShadowHOffsetRange");
const boxShadowVOffsetRange = document.getElementById("boxShadowVOffsetRange");
const boxShadowBlurRange = document.getElementById("boxShadowBlurRange");
const boxShadowSpreadRange = document.getElementById("boxShadowSpreadRange");
const boxShadowColorPicker = document.getElementById("boxShadowColorPicker");

const widthValue = document.getElementById("widthValue");
const heightValue = document.getElementById("heightValue");
const borderTopLeftRadiusValue = document.getElementById(
  "borderTopLeftRadiusValue"
);
const borderTopRightRadiusValue = document.getElementById(
  "borderTopRightRadiusValue"
);
const borderBottomRightRadiusValue = document.getElementById(
  "borderBottomRightRadiusValue"
);
const borderBottomLeftRadiusValue = document.getElementById(
  "borderBottomLeftRadiusValue"
);
const borderWidthValue = document.getElementById("borderWidthValue");
const boxShadowHOffsetValue = document.getElementById("boxShadowHOffsetValue");
const boxShadowVOffsetValue = document.getElementById("boxShadowVOffsetValue");
const boxShadowBlurValue = document.getElementById("boxShadowBlurValue");
const boxShadowSpreadValue = document.getElementById("boxShadowSpreadValue");

widthRange.addEventListener("input", updateBox);
heightRange.addEventListener("input", updateBox);
bgColorPicker.addEventListener("input", updateBox);
borderTopLeftRadiusRange.addEventListener("input", updateBox);
borderTopRightRadiusRange.addEventListener("input", updateBox);
borderBottomRightRadiusRange.addEventListener("input", updateBox);
borderBottomLeftRadiusRange.addEventListener("input", updateBox);
borderWidthRange.addEventListener("input", updateBox);
borderColorPicker.addEventListener("input", updateBox);
boxShadowHOffsetRange.addEventListener("input", updateBox);
boxShadowVOffsetRange.addEventListener("input", updateBox);
boxShadowBlurRange.addEventListener("input", updateBox);
boxShadowSpreadRange.addEventListener("input", updateBox);
boxShadowColorPicker.addEventListener("input", updateBox);

document.getElementById("generateCSS").addEventListener("click", generateCSS);

function updateBox() {
  const width = widthRange.value;
  const height = heightRange.value;
  const bgColor = bgColorPicker.value;
  const borderTopLeftRadius = borderTopLeftRadiusRange.value;
  const borderTopRightRadius = borderTopRightRadiusRange.value;
  const borderBottomRightRadius = borderBottomRightRadiusRange.value;
  const borderBottomLeftRadius = borderBottomLeftRadiusRange.value;
  const borderWidth = borderWidthRange.value;
  const borderColor = borderColorPicker.value;
  const boxShadowHOffset = boxShadowHOffsetRange.value;
  const boxShadowVOffset = boxShadowVOffsetRange.value;
  const boxShadowBlur = boxShadowBlurRange.value;
  const boxShadowSpread = boxShadowSpreadRange.value;
  const boxShadowColor = boxShadowColorPicker.value;

  widthValue.textContent = `${width}px`;
  heightValue.textContent = `${height}px`;
  borderTopLeftRadiusValue.textContent = `${borderTopLeftRadius}px`;
  borderTopRightRadiusValue.textContent = `${borderTopRightRadius}px`;
  borderBottomRightRadiusValue.textContent = `${borderBottomRightRadius}px`;
  borderBottomLeftRadiusValue.textContent = `${borderBottomLeftRadius}px`;
  borderWidthValue.textContent = `${borderWidth}px`;
  boxShadowHOffsetValue.textContent = `${boxShadowHOffset}px`;
  boxShadowVOffsetValue.textContent = `${boxShadowVOffset}px`;
  boxShadowBlurValue.textContent = `${boxShadowBlur}px`;
  boxShadowSpreadValue.textContent = `${boxShadowSpread}px`;

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = bgColor;
  box.style.borderTopLeftRadius = `${borderTopLeftRadius}px`;
  box.style.borderTopRightRadius = `${borderTopRightRadius}px`;
  box.style.borderBottomRightRadius = `${borderBottomRightRadius}px`;
  box.style.borderBottomLeftRadius = `${borderBottomLeftRadius}px`;
  box.style.border = `${borderWidth}px solid ${borderColor}`;
  box.style.boxShadow = `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`;
}

function generateCSS() {
  const width = widthRange.value;
  const height = heightRange.value;
  const bgColor = bgColorPicker.value;
  const borderTopLeftRadius = borderTopLeftRadiusRange.value;
  const borderTopRightRadius = borderTopRightRadiusRange.value;
  const borderBottomRightRadius = borderBottomRightRadiusRange.value;
  const borderBottomLeftRadius = borderBottomLeftRadiusRange.value;
  const borderWidth = borderWidthRange.value;
  const borderColor = borderColorPicker.value;
  const boxShadowHOffset = boxShadowHOffsetRange.value;
  const boxShadowVOffset = boxShadowVOffsetRange.value;
  const boxShadowBlur = boxShadowBlurRange.value;
  const boxShadowSpread = boxShadowSpreadRange.value;
  const boxShadowColor = boxShadowColorPicker.value;

  const css = `
.box {
    width: ${width}px;
    height: ${height}px;
    background-color: ${bgColor};
    border-top-left-radius: ${borderTopLeftRadius}px;
    border-top-right-radius: ${borderTopRightRadius}px;
    border-bottom-right-radius: ${borderBottomRightRadius}px;
    border-bottom-left-radius: ${borderBottomLeftRadius}px;
    border: ${borderWidth}px solid ${borderColor};
    box-shadow: ${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor};
}
    `;

  document.getElementById("cssOutput").value = css;
}

// Initialize the box with default values
updateBox();
