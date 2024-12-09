const jsonServer = require('json-server')

const MPServer = jsonServer.create()
const middleWare = jsonServer.defaults()
const PORT =  3000
const route = jsonServer.router('db.json')

MPServer.use(middleWare)
MPServer.use(route)

MPServer.listen(PORT, () => {
    console.log(`MPServer started at PORT : ${PORT} and waiting for client request!!`);
})