var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TestApp');


var User = mongoose.model('User',{
    username:{
        type:String
    },
    password:{
        type:String
    },
    status:{
        type:Boolean
    },
    type:{
        type:Number
    }

})


var newUser = new User({
    username: 'PEN Lymeng',
    username: 'PEN Lymeng123',
    status: false,
    type: 0,
});

newUser.save().then((doc) =>{
    console.log('save user',doc)
},(e)=>{
    console.log('Unable to save user')
})

