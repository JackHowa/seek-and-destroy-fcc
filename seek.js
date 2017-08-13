function destroyer(destroyableInputs) {
  var args = Array.prototype.slice.call(arguments);

  var potentialDeletes = args[0];
  var valuesToDelete = [args[1],args[2]];


  // var undeletedElements = potentialDeletes.filter(function(potentialDestroy) {
  //   return (valuesToDelete.indexOf(potentialDestroy) > -1);
  // });
  // return undeletedElements;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
