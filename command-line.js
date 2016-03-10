var numberUncommittedChanges = require('./index');
var util = require('util');

function fail(err) {
  var message = err;
  if (err.stack) {
    message = err.stack;
  }
  console.error(message);
  process.exit(1);
}

function ok() {
  process.exit();
}

numberUncommittedChanges(function(err, result) {
  if (err) {
    return fail(err);
  }
  if (result.total > 0) {
    return fail(util.format('There are %d uncommitted file%s.', 
      result.total, 
      result.total === 1 ? '' : 's'));
  }
  return ok();
});
