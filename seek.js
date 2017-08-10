function destroyer(destroyableInputs) {
  var potentialDeletes = [destroyableInputs[0]];
  var valuesToDelete = [destroyableInputs[1], destroyableInputs[1]];

  return potentialDeletes.filter(function(potentialDestroy) {
    return valuesToDelete.indexOf(potentialDestroy) > -1;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
