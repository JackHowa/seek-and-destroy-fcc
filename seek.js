function destroyer(destroyableInputs) {
  var args = Array.prototype.slice.call(arguments);

  var potentialDeletes = args[0];
  // need to parse everything after index zero not just 1 and 2 


  var valuesToDelete = [args[1],args[2], args[3]];

  var undeletedElements = potentialDeletes.filter(function(potentialDestroy) {
    // use not to delete falses 
    // index of finds not in the other array as -1
    return !(valuesToDelete.indexOf(potentialDestroy) > -1);
  });
  return undeletedElements;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
