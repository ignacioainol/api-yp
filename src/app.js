const express = require('express');
const app = express();

//config
app.set('port', 3000 || process.env.PORT);
app.use(require('./routes'));


//run server
app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`);
})