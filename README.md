# learn-nodejs

My Sandbox for learning NodeJS.

## Brief Lecture

1. Node use V8 Enging from Google which used in Google Chrome and written by C++.

2. use `console.log('');` to print to console.

3. from 811cdd94dfb7b8c28022af43b52f172fab3c337e, all object that have var will be GLOBAL, which mean that it can called from anywhere within the same node application.

4. `__dirname` and `__filename` is one of the DEFAULT GLOBAL Object that we can use.

5. function can be called by passing as a function's parameter using function expression.

6. `Module` has been used for seperating each part of the software. (like a namespace)

7. `events` module can be used for emitting,raising function using `key`. (*eventKey* in fed6c2d9dd8890943621d61c144c89b0a611ce5f)

8. `util.inherits` from `util` module can used in the same way as *extends in java*. **Note: On ES2015(ES6), `extends` is recommeded to be used instead. And `events.EventEmitter` MUST be replaced by `events` in Node 7.8.*.**

## Developing Note

### to run once

```javascript
node .\public\apps.js
or
node apps  // if already using cd to publict.
```

### to restart automatically on each saving

```javascript
nodemon apps  
```

## Environment

### Node

    * Node 10.14.1 LTS
    * NPM 6.4.14

### Nodemon

To continuously restart node script after each saving. `nodemon` has been used.

```javascript
    npm install nodemon -g
```

## References

* [Node JS Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) (Last Accesses: 8 December 2018, 01:53 GMT+7)
