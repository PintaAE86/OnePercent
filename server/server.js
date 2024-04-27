// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var express_1 = require("express");
// var path_1 = require("path");
// var dotenv_1 = require("dotenv");
// var app = (0, express_1.default)();
// dotenv_1.default.config(); //to ready .env files 
// var port = process.env.PORT || 3000;
// // to read encoded data by standard format used by HTML
// app.use(express_1.default.urlencoded({ extended: true }));
// //built in method to read parse body, dont need a body parser
// app.use(express_1.default.json());
// //Serve a static file to client before on initial render 
// app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
// app.post('/', function (req, res) {
//     res.send('Hello World');
// });
// // Catch all error handler 
// app.use(function (req, res) {
//     res.status(404).send('Does not exist.');
// });
// //Global Error Handling 
// app.use(function (err, req, res, next) {
//     var defaultErr = {
//         log: 'Express error handler caught middlerwear error',
//         status: 400,
//         message: "Error occured: ".concat(err)
//     };
//     Object.assign({}, defaultErr, err);
//     // another suggestion: Object.assign(defaultErr, err) //so this will overwrite inplace and replace overlapping
//     console.log(defaultErr.log, defaultErr.message);
//     res.status(500).send('Internal Server Error');
// });
// app.listen(port, function () { return console.log("Server listening on ".concat(port)); });
