chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {
  function suggest(filename, conflictAction) {
    __suggest({filename: filename,
               conflictAction: conflictAction,
               conflict_action: conflictAction});
    // conflict_action was renamed to conflictAction in
    // http://src.chromium.org/viewvc/chrome?view=rev&revision=214133
    // which was first picked up in branch 1580.
  }
  
  //get and capitalise the file extension
  end = item.filename.split('.');
  last = end.length - 1;
  capped = end[last].toUpperCase();
  
  //put together filename
  loc = capped.concat('/').concat(item.filename);
  suggest(loc,'uniquify');
  
});

chrome.runtime.onInstalled.addListener(function() {
    console.log('It has begun.');
});