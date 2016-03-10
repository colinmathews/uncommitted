# uncommitted
A super lightweight way to check if a git repository has uncommitted changes. 

## Installation
```
npm install uncommitted --save-dev
```

## Using with npm
Check your repo from within npm with a `package.json` like so. If there are any uncommitted changes, an error will stop any further scripts from running.

```javascript
{
  "name": "uncommitted-example",
  "version": "1.0.0",
  "scripts": {
    "prepublish": "uncommitted"
  },
  "devDependencies": {
    "uncommitted": "1.0.0"
  }
}
```

## API
```javascript
var uncommitted = require('uncommitted');
var util = require('util');

uncommitted(function(err, result) {
  if (err) {
    return console.error(err.message);
  }
  console.log(util.format('There are %d uncommitted file%s.', 
    result.total, 
    result.total === 1 ? '' : 's'));
});
```