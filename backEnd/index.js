const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('' , (req ,res)=>{
    res.send("main page")
})

app.get('/data', (req, res) => {
    res.send({
        imya : 'Axror',
        familiya : 'Kasimov'

    }) 

})




// Start server
const PORT =  3005
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});