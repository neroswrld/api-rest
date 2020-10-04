import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'

const app = express();

app.set('pkg',pkg);
app.use(morgan("dev"));


app.get('/',(req,res) => {
    res.json({
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version,
        name:app.get('pkg').name
    })
})

app.use('/products',productsRoutes)

export default app;
