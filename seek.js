function destroyer(destroyableInputs) {
  var arr = Array.prototype.slice.call(arguments);
  var args = Array.from(arguments);

  console.log(args);
  // var undeletedElements = potentialDeletes.filter(function(potentialDestroy) {
  //   return (valuesToDelete.indexOf(potentialDestroy) > -1);
  // });
  // return undeletedElements;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
