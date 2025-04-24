
const Task  = require('../models/task')
const asyncWrapper= require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    
     const tasks=  await Task.find({});
     res.status(200).json({ tasks });
     
 })  
const getTask = asyncWrapper( async (req, res, next) => {
    
        const {id : taskID}= req.params;
        
        const task=  await Task.findOne({_id : taskID});
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res
        .status(200)
        .json({ status:"success", data :{ tasks, nbHits: tasks.length } });
        
        // catch (error) {
        //     console.error("🔥 Error creating task:", error);
        //     res.status(500).json({  
        //         msg: "Something went wrong", 
        //         error: error.message,   
        //         stack: error.stack     
        //     });
        // }
})
const createTask = asyncWrapper( async (req, res) => {
   
        const task = await Task.create(req.body);
        res.status(201).json({ task });
     
})
const updateTask = asyncWrapper( async (req, res, next) => {
     
        const {id : taskID}= req.params;
        
        const task=  await Task.findOneAndUpdate({_id : taskID},req.body , {
            new : true,
            runValidators: true
        });
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task });
       
})
const deleteTask = asyncWrapper( async (req, res, next) => {
    
        const {id : taskID}= req.params;
        
        const task=  await Task.findOneAndDelete({_id : taskID});
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task }); 
})
const editTask = async (req, res) => {
    try{
        const {id : taskID}= req.params;
        
        const task=  await Task.findOneAndReplace({_id : taskID},req.body , {
            new : true,
            runValidators: true
        });
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task });
       }
        catch (error) {
            console.error("🔥 Error creating task:", error);
            res.status(500).json({  
                msg: "Something went wrong", 
                error: error.message,   
                stack: error.stack     
            });
        }
}

module.exports= {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    editTask
}