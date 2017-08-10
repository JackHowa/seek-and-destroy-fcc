function destroyer(destroyableInputs) {
  var potentialDeletes = [destroyableInputs[0]];
  // ah this is only 1 
  // not getting the whole array 

  var valuesToDelete = [destroyableInputs[1], destroyableInputs[2]];
  // am getting the first two here 


  console.log(potentialDeletes);
  console.log(valuesToDelete);

  var undeletedElements = potentialDeletes.filter(function(potentialDestroy) {
    return (valuesToDelete.indexOf(potentialDestroy) > -1);
  });
  return undeletedElements;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
