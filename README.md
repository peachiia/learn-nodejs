# learn-nodejs

My Sandbox for learning NodeJS.

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

## Brief Lecture

### Did you know

* Node use V8 Enging from Google which used in Google Chrome and written by C++.

### Basic Operation

* use `console.log('');` to print to console.

* from 811cdd9, all object that have var will be GLOBAL, which mean that it can called from anywhere within the same node application.

* `__dirname` and `__filename` is one of the DEFAULT GLOBAL Object that we can use.

* function can be called by passing as a function's parameter using function expression.

* `Module` has been used for seperating each part of the software. (like a namespace)

* `events` module can be used for emitting,raising function using `key`. (*eventKey* in fed6c2d)

* `util.inherits` from `util` module can used in the same way as *extends in java*. **Note: On ES2015(ES6), `extends` is recommeded to be used instead. And `events.EventEmitter` MUST be replaced by `events` in Node 7.8.*.**

* `fs.readFileSync()` and `fs.writeFileSync()` are *blocking functions* for reading/writing a file. `fs.readFile()` and `fs.writeFile()` are *NON blocking functions*.  

* `fs.unlinkSync` is for *file deletion*. Error might occur if file already deleted.

* `fs.mkdirSync` id for *Make Directory*. Error might occur if folder already existed. (Error: EEXIST: file already exists)

* `fs.mkdir` is *NON blocking* and *Error: EEXIST* will NOT occur even the folder is already exist.

### Servers

* **protocols** is a set of communication rules, that two sides agree to use when communicating.

* **socket** is a tunnel that **packets** can travel between client and server. To create a tunnel, **Server have to listen on a port**. Then, **Client have to cearte a socket using IP Address and Port number**.

* `http.createServer` on `http` module is for server creation. Its callback function can get `request` and `response` object as a parameter. (on 3a4fbcb)

* `request` is containing *request header + request data*. 

* `response` is containing *response header + response data*. 
  * `response header` should contain **Content-Type** and **Status**.

* from 3a4fbcb, request might occur 2 times because the function is called on every kind of request. And if using inspector in Chrome, you'll see that the web browser request for `http://127.0.0.1:3000/` and `http://127.0.0.1:3000/favicon.ico` and that's why.
