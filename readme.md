install
------

```
git clone https://github.com/jamestalmage/coffeeify-issue.git
cd coffeeify-issue
npm install
```

reproduction
------------


###via command line
(i.e. `browserify -t coffeeify index.coffee`)

this uses `index.coffee` as the entry file and works fine
```
npm test
```

--------

###via direct browserify api.
Forgoes gulp file stream api altogether and just pipes to `fs.createWriteStream(...)`

this uses `index.coffee` as the entry file and works fine
```
gulp pure-browserify
```

--------

###via gulp-browserify with `index.coffee` as entry file.

*this does not work*
gulp-browserify somehow breaks the ability to use `index.coffee` as entry point,
a `.js` wrappper is required.
```
gulp coffee-entry
```

--------

###via gulp-browserify with an `index.js` entry file
`index.js` simply `require`s the intended `index.coffee` file.

works fine
```
gulp js-entry
```

--------


###via vinyl-transform.

vinyl-transform seems to just **not** work if you have browserify transforms.
However it works fine if you have no transforms.
```
gulp vinyl-transform
```

--------

###via vinyl-source-stream.

works fine.
```
gulp vinyl-source-stream
```
