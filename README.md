# Server-Side Development with Node JS

Courseware of Coursera Full Stack Specialization: Server-Side Development with Node JS

---

## Resources

### NodeJS Basics

#### Architecture

* [NodeJS Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

* [CommonJS](http://www.commonjs.org/) and [RequireJS](http://requirejs.org/)

#### Core Modules

* [Postman](https://www.postman.com/) Request & Response debugging tool

* [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### Web Framework

* [ExpressJS](www.expressjs.com)Fast & Minimalist Web Framework
* **Package Installation Rules**
    * Minor acceptable: 
    ```bash
    npm install express@"^4.0.0"
    ```
    * Patch acceptable:
    ```bash
    npm install express@"~4.0.0"
    ```
* **Node Package Structure**
    * package.json
        Specify the dependencies of current project
    * package-lock.json
        Record the exact tree generated during installation. This is useful for reproducing environment on different machine with 
        ```bash
        npm install
        ```
    * node_modules
        Store all third party package installations inside. 
---

## Setup

```bash
# launch node:10 docker
docker run -it --rm -v $PWD:/home/node/app -p 3000:3000 node:10 bash
```
--