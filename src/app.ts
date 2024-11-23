import express from 'express'


const app = express();

//Routes 

//http methods

app.get('/', (req, res) => {
  res.send('Hello, World!')
})


export default app;