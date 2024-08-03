
// const express = require('express');
// const app = express();
// // const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// // const authJwt = require('./helpers/jwt');
// require('dotenv').config();

// const Product = require('./model/products');



// const api = process.env.API_URL;

// // app.use(express.static(path.join(__dirname,'../Source/Cua_Hang_My_Pham_Online')));

// //cors
// app.use(cors()); 
// app.options('*', cors());

// //middleware

// app.use(morgan('tiny'));
// app.use(express.json());
// app.use(express.urlencoded());



// app.use(express.static(path.join(__dirname, 'Source')));

// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Source/index.html'));
// });
// // Routers
// const productsRouter = require('./routes/products');
// // const categoriesRouter = require('./routers/categories');
// // const userRouter = require('./routers/users');

// app.use(`${api}/products` , productsRouter);
// // app.use(`${api}/categories` , categoriesRouter);
// // app.use(`${api}/users` , userRouter);



// app.use((req,res) => {
//     res.status(404).send({
//         status: 404,
//         message: '<h1 style:"color:red">Not found</h1>'
//     })
// })




// mongoose.connect(process.env.CONNECTION_STRING, {
//     dbName: 'CosmeticsStores' // Specify your database name here
// }).then(() => {
//     console.log('Database connection is ready...');
// }).catch((err) => {
//     console.error('Database connection error:', err);
// });

// const PORT = process.env.PORT || 3002;

//  app.listen(PORT, () => {
//   console.log(`Server is running http://localhost:${PORT}`);
// });
 
// // app.js
// console.log('Hello, world!');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const api = process.env.API_URL || '/api';

// Cấu hình Express để phục vụ các file tĩnh từ thư mục Cua_Hang_My_Pham_Online


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'Source', 'Cua_Hang_My_Pham_Online')));


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'Source', 'Cua_Hang_My_Pham_Online','htmldemo.net','argima','argima','index-two.html'));
});



const productsRouter = require('./routes/products');

app.use(`${api}/products`, productsRouter);

const authRouter = require('./routes/auth');
// const categoriesRouter = require('./routers/categories');
// const userRouter = require('./routers/users');

app.use(`${api}/products` , productsRouter);
app.use(`${api}/auth` , authRouter);
// app.use(`${api}/categories` , categoriesRouter);
//app.use(`${api}/users` , userRouter);




app.get('/', (req, res) => {

res.sendFile(__dirname + '/Cua_Hang_My_Pham_Online/index.html');
})



app.use((req, res) => {
    res.status(404).send({
        status: 404,
        message: '<h1 style="color:red">Not found</h1>'
    });
});

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'CosmeticsStores'
}).then(() => {
    console.log('Database connection is ready...');
}).catch((err) => {
    console.error('Database connection error:', err);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
