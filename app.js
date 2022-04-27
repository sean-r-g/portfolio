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


});

