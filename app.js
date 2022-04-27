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
    $('#linkedin').css('color', 'white').css('background-color', '#0072b1').css('border-radius', '10px').css('text-shadow', '2px 2px 4px black')
  ])
  $('#gh-logo').on('mouseover', () =>[
    $('#github').css('color', 'lightgray').css('background-color', 'black').css('border-radius', '10px').css('text-shadow', '2px 2px 4px black')
  ])

  $('#li-logo').on('mouseout', () =>[
    $('#linkedin').css('color', 'transparent').css('background-color', 'transparent').css('text-shadow', 'none')
  ])
  $('#gh-logo').on('mouseout', () =>[
    $('#github').css('color', 'transparent').css('background-color', 'transparent').css('text-shadow', 'none')
  ])
  
});

