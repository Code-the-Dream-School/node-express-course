Create a new git branch called `week6`. **This should be created when the `week5` branch is active, so that it adds to week 5’s work.** If you’ve made any changes to the `week5` branch due to reviews on your PR, make sure to update your `week6` branch by following the instructions from [Lesson 4](./ctd-node-lesson-4.md) Continue to work in the `node-express-course/03-task-manager/starter` directory. You duplicate the work of the instructor in the video.

### Additional Assignment

Create a file in the starter directory called `QuizAnswers2.txt`. Put answers to the following questions in it.

1. In this lesson, you created a middleware function called `asyncWrapper`. Why?
2. Suppose that you want to make sure that both a status code and an error message are sent back to the user when they request the URL for a task that does not exist. Assume that you’ve created a `CustomAPIError` class and an error handler that references that class. Complete the code:  
```javascript  
const getTask = asyncWrapper(async (req, res, next) => {  
  const { id: taskID } = req.params;  
  const task = await Task.findOne({ _id: taskID });  
  if (!task) {  
    // your code here  
  }  
  res.status(200).json({ task });  
});  
```

As you will see in the lessons that follow, you do not have to always create the `asyncWrapper` middleware, because you can instead use an NPM package called `express-async-errors` that provides the same capability.