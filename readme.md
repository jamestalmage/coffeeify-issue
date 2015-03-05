install
------

```
git clone https://github.com/jamestalmage/coffeeify-issue.git
cd coffeeify-issue
npm install
```

reproduction
------------


test command line (i.e. `browserify -t coffeeify index.coffee`)

this uses `index.coffee` as the entry file and works fine
```
npm test
```

--------

test using gulp with `index.coffee` as entry file.

**this does not work**
```
gulp open
```

--------

test using gulp with a `index.js` entry file that simply `require`s the intended `index.coffee` file.

works fine
```
gulp open2
```
