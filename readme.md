install
------

```
git clone https://github.com/jamestalmage/coffeeify-issue.git
cd coffeeify-issue
npm install
```

reproduction
------------


test command line (i.e. `browserify -t coffeeify ...`)
```
npm test
```
this works fine

--------

test using gulp with entry as coffee file.
```
gulp open
```
**this does not work**

--------

test using gulp with a `index.js` entry file that simply `require`s the intended `index.coffee` file.
```
gulp open2
```
works fine

