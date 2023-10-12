require('dotenv').config();

import app from './src/app'

app.listen(process.env.PORT,()=>{
    console.log(`Server Running in http://localhost:${process.env.PORT}`)
})

