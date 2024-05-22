const jsonServer = require("json-server")
const todoServer = jsonServer.create()
const middleWare = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000

todoServer.use(middleWare)
todoServer.use(router)

todoServer.listen(PORT,()=>{
console.log(`Server started @ ${PORT}`);
})