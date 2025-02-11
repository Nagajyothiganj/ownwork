const Todo = require('../models/Todo.js');


exports.getTodos = async (req, res) => {
    try {
       
        const todos = await Todo.find();
        
        
        res.status(200).json(todos);
    } catch (error) {
       
        res.status(500).json({ message: 'Server Error' });
    }
};




exports.createTodo = async (req, res) => {
    try {
       
        const { task } = req.body;

        const newTodo = new Todo({
            task,
            completed: false,  
        });

      
        await newTodo.save();

        
        res.status(201).json(newTodo);
    } catch (error) {
      
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.updateTodo = async (req, res) => {
    try {
        
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,  
            req.body,       
            { new: true }  
        );

      
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
      
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

       
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        
        res.status(500).json({ message: 'Server Error' });
    }
};
