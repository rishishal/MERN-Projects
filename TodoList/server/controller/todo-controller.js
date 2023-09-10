import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json(err.messeage);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(err.messeage);
  }
};

export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await todo.save();
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err.messeage);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
