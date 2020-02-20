
exports.min = function min (array=0) {
  if(array == false){
    return 0;
  }
  for (i = 0; i < array.length; i++){
    if(array[i] < array[0]){
      array[0] = array[i];
    }
  }
  return array[0]
}

exports.max = function max (array=0) {
  if(array == false){
    return 0;
  }
  
  for (i = 0; i < array.length; i++){
    if(array[i] > array[0]){
      array[0] = array[i];
    }
  }
  return array[0]
}


exports.avg = function avg (array=0) {
  if(array == false){
    return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}

