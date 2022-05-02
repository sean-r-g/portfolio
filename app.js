//Meal Generator Consts/Arrays//
const genre = ['Southern', 'East Asian', 'Mexican', 'Italian', 'Mediterranean']
const flavorProfile = ['spicy', 'fried', 'saucy', 'umami', 'savory', 'breaded']
const protein = ['chicken', 'tofu', 'chickpeas', 'beef', 'pork', 'shrimp', 'white fish', 'salmon']
const veggies = ['snap peas', 'tomato', 'baby bok choy', 'broccoli', 'green beans', 'cuccumber', 'greens', 'kale', 'carrots', 'bell pepper', 'jalapeno', 'yellow onion', 'shallot', 'red onion']
const side = ['potato', 'rice', 'couscous', 'pita', 'bread', 'sweet potato', 'orzo', 'pasta/noodles']

const randomize = (array) => {
  for (let i = 0; i < array.length; i++) {
    return array[Math.floor(Math.random() * array.length)]
  }
}
const randomizeAll = () => {
  $('#meal-ideas').empty()
  $('#meal-ideas').css('border', 'solid 1px #105762').css('box-shadow', '2px 2px 2px #105762')
  $('#meal-ideas').text(`${randomize(flavorProfile)}, ${randomize(protein)}, ${randomize(veggies)}, ${randomize(veggies)}, ${randomize(side)}`)
}

///Base website JS + jQuery
$(() => {
  let currentImgIndex = 0
  let numOfImages = $('.project-screenshots').children().length - 1

  $('.next').on('click', () => {
    $('.project-screenshots').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages){
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.project-screenshots').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.project-screenshots').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
      currentImgIndex--
    } else {
      currentImgIndex = numOfImages
    }
    $('.project-screenshots').children().eq(currentImgIndex).css('display', 'block')
  })

  ////Show social name
  $('#github').css('color', 'transparent')
  $('#linkedin').css('color', 'transparent')

  $('#li-logo').on('mouseover', () =>[
    $('#linkedin').css('color', 'white').css('background-color', '#0072b1').css('border-radius', '10px').css('text-shadow', '2px 2px 4px black').css('transform', 'scale(1.5)')
  ])
  $('#gh-logo').on('mouseover', () =>[
    $('#github').css('color', 'lightgray').css('background-color', 'black').css('border-radius', '10px').css('text-shadow', '2px 2px 4px black').css('transform', 'scale(1.5)')
  ])

  $('#li-logo').on('mouseout', () =>[
    $('#linkedin').css('color', 'transparent').css('background-color', 'transparent').css('text-shadow', 'none')
  ])
  $('#gh-logo').on('mouseout', () =>[
    $('#github').css('color', 'transparent').css('background-color', 'transparent').css('text-shadow', 'none')
  ])
  ///Meal Generator////
  // $('.meal-div').append($('<p>').text(randomizeAll()))
  $('#randomize').on('click', randomizeAll)

});

