(function () {
  const controller = document.getElementById('controller')
  const resultDisplay = document.querySelector('#result-display h1')
  const rgbData = {
    'red': 0,
    'green': 0,
    'blue': 0
  }

  function updateBackground(value) {
    document.querySelector('body').style.background = value
  }

  function convertToHex(rgbData) {
    let hexValue = '#'
    for (let color in rgbData) {
      hexValue += Number(rgbData[color]).toString(16).padStart(2, 0)
    }
    return hexValue
  }

  //display default background color
  updateBackground('#000000')

  //add input event listener to controller
  controller.addEventListener('input', event => {
    if (event.target.tagName === 'INPUT') {
      const color = event.target.dataset.color
      const rgbNumberDisplay = event.target.nextElementSibling
      const numberValue = event.target.value

      //update number value of that input in that section
      rgbNumberDisplay.textContent = numberValue

      //update number in rgbData object
      rgbData[color] = numberValue

      //rgb convert to hex number 
      const hexValue = convertToHex(rgbData)

      //update hex number 
      resultDisplay.textContent = hexValue

      //update background color
      updateBackground(hexValue)
    }
  })
})()