var exec = require('child_process').exec;

function numberUncommittedChanges(callbackFn) {
  exec('git status --porcelain | grep "^\\s*[MADRUC\\?]" | wc -l', function(err, result) {
    if (err) {
      return callbackFn(err);
    }
    result = result.trim();
    result = parseInt(result, 10);
    if (isNaN(result)) {
      return callbackFn(new Error('Unexpected result: ' + result));
    }
    callbackFn(null, {
      total: result
    });
  });
}

module.exports = numberUncommittedChanges;