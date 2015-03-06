install
------

```
git clone https://github.com/jamestalmage/coffeeify-issue.git
cd coffeeify-issue
npm install
```

reproduction
------------


via command line (i.e. `browserify -t coffeeify index.coffee`)

this uses `index.coffee` as the entry file and works fine
```
npm test
```

--------

via direct browserify api. Forgoes gulp file stream api altogether
and just pipes to `fs.createWriteStream(...)`

this uses `index.coffee` as the entry file and works fine
```
npm gulp open-pure-browserify
```

--------

via gulp-browserify with `index.coffee` as entry file.

**this does not work**
```
gulp open-coffee-entry
```

--------

via gulp-browserify with an `index.js` entry file that simply `require`s the intended `index.coffee` file.

works fine
```
gulp open-js-entry
```

--------


via vinyl-transform.

vinyl-transform seems to just not work if you have browserify transforms.
```
gulp open-vinyl-transform
```

--------

via vinyl-source-stream.

works fine.
```
gulp open-vinyl-transform
```
