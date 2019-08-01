chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element){
  var newArr = [...array]
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array 
}

function addElementToEndOfArray(array,element){
  var fooArr = [...array]
  fooArr.push(element)
  return fooArr
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array 
}

function accessElementInArray(array,index){
  
}