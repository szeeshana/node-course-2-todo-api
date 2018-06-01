var {mongoose} = require('./../db/mongoose');
var User = mongoose.model('Users',{
    email: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    }
});
module.exports = {User};



/* Todo */
// var newUser = new User({
    //     email: 'zeeshan.altaf27@gmail.com'
    // })
    // newUser.save().then((res) => {
//     console.log('User is saved', res);
// }, (e) => {
//     console.log(e);
// });
/* Todo */