var mongodb=require("mongodb");
var url="mongodb://localhost:27017/student";
var MongoClient = mongodb.MongoClient;
var conn;
var students;
//making global variable//conn//students
MongoClient.connect(url, function (err, result) {
    if (err != null)
        return;
    conn = result;

    students=conn.collection("studentdata");
});

//fetching data from mangodb database
exports.getStudents=function(req,res) {
   req.body;

        students.find().toArray(function (err, result) {
            console.log("fetching data from data base");
            res.send(result);/*
            for (i = 0; i < result.length; i++) {
                console.log(result);
            }
            */
        })
}

exports.setStudent=function(req,res) {

    students.insertMany(res.body, function (err, result) {

        if (err) {
            throw err
        }
        console.log("inserting new data");
        console.log(result);

    })

}

