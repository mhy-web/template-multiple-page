const Koa = require('koa');
const router = require('./src/apps/router/index');
const app = new Koa();

// console.log(router);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3100);
console.log('server start at port 3100!');
