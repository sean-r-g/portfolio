//Meal Generator Consts/Arrays//
const genre = ['Southern', 'East Asian', 'Mexican', 'Italian', 'Mediterranean']
const flavorProfile = ['spicy', 'savory', 'sweet', 'umami']
const protein = ['chicken', 'tofu', 'chickpeas', 'beef', 'pork', 'shrimp', 'white fish', 'salmon']
const veggies = ['snap peas', 'tomato', 'baby bok choy', 'broccoli', 'green beans', 'cuccumber', 'greens', 'kale', 'carrots', 'bell pepper', 'jalapeno', 'yellow onion', 'shallot', 'red onion']
const side = [' baked potato', 'rice', 'couscous', 'pita', 'crusty bread', 'french fries', 'sweet potato']

const randomize = (array) => {
  for (let i = 0; i < array.length; i++) {
    return array[Math.floor(Math.random() * array.length)]
  }
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
  
});

