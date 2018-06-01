var {mongoose} = require('./../db/mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
module.exports = {Todo};


/* TEST */
// var newTodo = new Todo({
//     text: 'aaaaaa',
//     completed: true,
//     completedAt: '123'
// });

// newTodo.save().then((res) => {
//     console.log('Todo is saved', res);
// }, (e) => {
//     console.log(e);
// });

// email req trim settype setminlength
/* TEST */