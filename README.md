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

* `Stream` can be used for *buffering data* and *asynchronously read and write*. 
  * `Readable/Writable stream` is allow node js to read/write data to/from stream.
  * `Duplex` can read/write data to stream.

## JavaScript Pro Tips - Code This, NOT That.
Learn how to write solid modern JavaScript and avoid bad code from then olden days. References from https://www.youtube.com/watch?v=Mus_vwhTCq0

### Console.log

* Instead of use `console.log` for each object.
  ```javascript
  const foo = {};
  const bar = {};
  const baz = {};

  // BAD
  console.log(foo);
  console.log(bar);
  console.log(baz);
  ```

  * Use list logging would be better.
    ```javascript
    console.log({foo, bar, baz});
    ```
  * If objects are sharing properties
    ```javascript
    console.table([foo, bar, baz]);
    ```

* CSS Can be applied to console.log()
  ```javascript
  console.log('%c Hello', 'color: orange; font-weight: bold;')
  ```


* For brenchmarking, Timer (tic-toc like) can e used.
  ```javascript
  console.time('timer_name');
  ...
  console.timeEnd('timer_name');
  
  ```

* Log Tracing (for verbose) can used to get the origin of calling.
  ```javascript
  const callTrace = () => console.trace('calTrace was called')

  callTrace()
  callTrace()
  ```

### Desturcturing
For an object with many properties 
```javascript
const turtle = {
    name: 'Bob',
    legs: 4
    type: 'turtle'
}

// BAD
function showInfo(animalObject) {
    return `Hi, I am ${animalObject.name}. I am a ${animalObject.type} and I have ${animalObject.legs} legs.`;
}
```

* To reduct a repetative part in code. animalObject can be replace as a required properties name of that object.
  ```javascript
  function showInfo({name, legs, type}) {
      return `Hi, I am ${name}. I am a ${type} and I have ${legs} legs.`;
  }
  ```

* OR, if you don't like a bracket syntax.
  ```javascript
  function showInfo(animalObject) {
      const {name, legs, type} = animalObject;
      return `Hi, I am ${animalObject.name}. I am a ${animalObject.type} and I have ${animalObject.legs} legs.`;
  }
  ```

### Templating (Introduced to use in Polymer Framework)
For an object with many properties 
```javascript
const horse = {
    name: 'Army',
    age: 7
}

function isOld(str, age) { // format is param1, param2, ...
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
```
* Normal
  ```javascript
  const fulltext = isOld('This hourse is ', horse.age)
  ```

* Using Advance Tag (Templating)
  ```javascript
  const fulltext = isOld`This hourse is ${hourse.age}`; // string itself -> str(param1), first param->age (param2), and so on...
  ```

### Spread Syntax
* For object composing
  ```javascript
  const pikachu = { name: 'Pikachu' };
  const stats = { hp: 40, attack: 60};

  // BAD
  pikachu['hp'] = stats.hp;
  pikachu['attack'] = stats.attack;

  const level_0 = Object.assign(pikachu, stats)
  const level_1 = Object.assign(pikachu, { hp: 50})
  
  // GOOD
  const level_0 = { ...pikachu, ...stats }
  const level_1 = { ...pikachu, hp: 50 }
  ```

* For Array shifting
  ```javascript
  let obj_array = ['AA', 'BB', 'CC',];

  // BAD
  obj_arrray.push('DD');
  obj_arrray.push('EE');
  obj_arrray.push('FF');

  // GOOD : shift
  obj_array = [ ... obj_array, 'DD', 'EE', 'FF' ];

  // GOOD : unshift
  obj_array = [ 'DD', 'EE', 'FF', ...obj_array ];

  // GOOD : insert
  obj_array = [ 'DD', ...obj_array, 'EE', 'FF' ];

  ```
  
  * Note: in the end of array, you can leave `,` for git-commit line changed reduction.
    ```javascript
    let obj_array = [ 'AA', 'BB', 'CC', ]; 
    // Comma in the end will caused to ERROR in very-earier version of java-script.
    // However, It'll work just fine (and recommended to do) in current version (version > 4).
    ```
    
### Looping
  ```javascript
  const orders = [ 500, 30, 99, 15, 223 ];
  
  // BAD
      const total = 0;
      const withTax = [];
      const highvalue = [];
  
      for (i = 0; i < orders.length; i++) {
          // Reduce
          total += orders[i];
  
          // Map
          withTax.push(orders[i] * 1.1);
  
          // Filter
          if (orders[i] > 100) {
              highValue.push(orders[i]);
          }
      }
  
  
  // GOOD
      // Reduce: -> acc: accumulated value, cur: current value
      const total = orders.reduce((acc, cur) => acc + cur);
  
      // Map
      const withTax = orders.map(v => v * 1.1);
  
      // Filter
      const highvalue = orders.filter(v => v > 100);
  ```

### Async-Await
  ```javascript
  const random = () => {
      return Promise.resolve(Math.random())
  }

  // BAD

  const sumAllAsync = () => {
      let A;
      let B;
      let C;

      return random()
        .then(v => {
            A = v;
            return random();
        })
        .then(v => {
            B = v;
            return random();
        })
        .then(v => {
            C = v;
            return A + B + C;
        })
        then(v => {
            console.log(`Result = ${v}`);
        })
  }

  // GOOD

  const sumAllAsync = async() => {
      const A = await random();
      const B = await random();
      const C = await random();
      
      console.log(`Result = ${A + B + C}`);
  }
  ```
