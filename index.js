const Express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8001;
const cors = require('cors');
const knex = require('knex');
const config = require('./knexfile');
// this is client connection
const dbClient = knex(config);
const app =new Express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


// insert into table and respond employee object on json formate
app.post('/employee/post', function (req, res) {
    dbClient('employee').insert({
        username:"Giri",
        password:"giri",
        salary:2000.,
        age:22,
        image:""
        
    })
        .then(function () {
            dbClient.select()
                .from('employee')
                .then(function (employee) {
                    res.send(employee);
                })
        })
});

// getting all values from table on employee object
app.get('/employee', function (req,res){
    dbClient.select()
            .from('employee')
            .then(function (employee){
                res.send(employee)
            })
})

//get employee details by id and respond employee details on json 
app.get('/employee/:id', function(req,res){
    dbClient.select()
            .from('employee')
            .where('id',req.params.id)
            .then(function(data){
                res.send(data)
            })
})


// update employee details and respond employee object to json 
app.put('/employee/update/:id',function(req,res){
    dbClient('employee')
            .where('id',req.params.id)
            .update({
                username: "hero",
                password: "hero",
                salary: 50000,
                age: 25,
                image: " hero"
            }).then(function(){
                dbClient.select()
                        .from('employee')
                        .then(function(employee){
                            res.send(employee)
                        })
            })
                
            })

     // update employee details and respond employee object to json 

app.delete('/employee/delete/:id', function (req, res) {
    dbClient('employee').where('id', req.params.id)
        .del()
        .then(function () {
            dbClient.select()
                .from('employee')
                .then(function (employee) {
                    res.send(employee);
                })
        });
})



app.listen(port, function () {
    console.log("listening on port: ", port);
})
