const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.send("Minixpress Reached")
})

const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`Go to http://localhost:${port}`));