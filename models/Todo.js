const mongoose = require ("mongoose");

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,   
        required: true, 
        trim: true      
    },
    completed: {
        type: Boolean,  
        default: false  
    },
    createdAt: {
        type: Date,     
        default: Date.now
    }
});


const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
