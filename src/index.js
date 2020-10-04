import app from './app'
import './database'

app.set("port",1000)

app.listen(app.get("port"));
console.log("Server listen on port:", app.get('port'))