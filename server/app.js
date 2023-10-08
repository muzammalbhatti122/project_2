
let myExpress = require('express');

let jsonWebToken = require('jsonwebtoken');

let app = myExpress();

let users = [];


app.use(myExpress.json())




app.post('/signup-hogya' ,function(req , res){
        console.log(req.body);
        users.push(req.body);
        res.json(req.body)
})




app.post('/chek-token' , function(req , res){

    jsonWebToken.verify(req.body.token, 'cat sy mioon',function(err , myData){

        let userFindKiya = users.find(a=>a.userEmail == myData.email);
        res.json(userFindKiya)

        console.log(myData);
    })

    console.log(req.body.token);
})

app.post('/login-hogya' , function(req , res){
 let userMillGya = users.find(abc=>abc.userEmail == req.body.userEmail && abc.userPassword == req.body.userPassword)


 if(userMillGya){
    jsonWebToken.sign({email:userMillGya.userEmail} , 'cat sy mioon' , {
        expiresIn:'2d'
    },function(err,token){

        res.json({
           myToken : token,
            userMillGya
        });
     }
    );
 }


})


app.listen('6607' , function(){
    console.log('chal raha ha ');
})