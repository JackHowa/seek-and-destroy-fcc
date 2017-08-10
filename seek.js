
function destroyer(potentiallyDestroyedArray) {
  return potentiallyDestroyedArray[0].filter(function(potentialDestroy) {
    return potentiallyDestroyedArray[1].includes(potentialDestroy);
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
