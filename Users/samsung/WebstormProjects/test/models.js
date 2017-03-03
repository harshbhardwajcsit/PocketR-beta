  var mongoose=require("mongoose");
  mongoose.connect("mongodb://localhost:27017/student");
  var Schema=mongoose.Schema;

//creaating new collection
   var User= mongoose.model('User', {name:String,age:Number,class:String,Adresss:{
       pincode:Number,streetAd:String
     //  var Phone=mongoose.model('')
   }})


// adding data to collections explicitly
var u1=new User();  ///passing var to u1
u1.name="Harsh Bhardwaj";
u1.age="21";
u1.class="computer scince";
u1.Adresss.pincode="302023";
u1.Adresss.streetAd="VDN";

//save in user collection

u1.save(function(err,result){
    if(err){
        throw err;             //saving data to user collections

    }
    else
    {
        console.log(result);
        //res.send(result);
    }
})
 
 

//post data from login form 
exports.userSignup=function (req,res)
{  var userz=req.body;
    var u1=new User(req.body);
    userz.save(function(err,result){
        if(err){
            throw err;

        }
        else
        {
            console.log(result);
            res.send(result);
        }
    })
}

//show users in the schema
exports.getUsers=function (req,res)
{
   // var u1=new User();
    User.find(function(err,result){
        if(err){
            throw err;

        }
        else
        {
            console.log(result);
            res.send(result);
        }
    })
}


//creatinng schema
var playerSchema=Schema({name:String, age:{type:Number,max:40}, team:{type:String,default:"IND"}});
var player_obj= mongoose.model('player_obj', playerSchema);
  var player_data=new player_obj();
  player_data.name="sachin tendulkar";
  player_data.age="40";
  player_data.save(function(err,result){
      if(err){
          throw err;}             //saving data to user collections
      else
      {
          console.log(result);}
          //res.send(result)}
  })



//behavior

playerSchema.statics.findByName=function(n,cb)
{
    return this.find({name:n},cb)

}


exports.setPlayer=function(req,res){
    var p=new Player(req.body);
      p.save(function(err,result){
            if(err){
                throw err;

            }
            else
            {
                //console.log(result);
                res.send(result);
            }
        }
    )

}
exports.getPlayer=function(req,res){
    Player.findByName("req.query.name",function(err,result){
        if(err){
            throw err;

        }
        else
        {
            //console.log(result);
            res.send(result);


        }
    })

}

//////////////////////////////////////////////////////////////////////



exports.setPlayer=function(req,res){
    var p=new Player(req.body);
    p.save(function(err,result){
            if(err){
                throw err;

            }
            else
            {
                //console.log(result);
                res.send(result);
            }
        }
    )

}