const controller = document.getElementById('controller')
const resultDisplay = document.querySelector('#result-display h1')
const rgbData = {
  'red': 0,
  'green': 0,
  'blue': 0
}

//create Converter constructor function
function Converter() { }

//create instance
const converter = new Converter()

//create updateBackground method to Converter
Converter.prototype.updateBackground = function (value) {
  document.querySelector('body').style.background = value
}

//create updateRgbNumber method to Converter
Converter.prototype.updateRgbNumber = function (section, value) {
  section.textContent = value
}

Converter.prototype.convertToHex = function (rgbData) {
  let hexValue = '#'
  for (let color in rgbData) {
    hexValue += Number(rgbData[color]).toString(16).padStart(2, 0)
  }
  return hexValue
}

Converter.prototype.updateHexNumber = function (hexValue) {
  resultDisplay.textContent = hexValue
}

//display default background color
converter.updateBackground('#000000')

//add change event listener to controller
controller.addEventListener('input', event => {
  if (event.target.tagName === 'INPUT') {
    const color = event.target.dataset.color
    const numberSection = event.target.nextElementSibling
    const numberValue = event.target.value

    //update number value of that input in that section
    converter.updateRgbNumber(numberSection, numberValue)

    //update number in rgbData object
    rgbData[color] = numberValue

    //rgb convert to hex number 
    const hexValue = converter.convertToHex(rgbData)

    //update hex number 
    converter.updateHexNumber(hexValue)

    //update background color
    converter.updateBackground(hexValue)
  }
})