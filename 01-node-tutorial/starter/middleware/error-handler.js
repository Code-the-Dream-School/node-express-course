//express has build in error handlers.
//we need to pass 4 arguments (err, req, res, next)
//мы разместим в самом конце наших путей

//после того, как создали кастомное отображение ошибки мы должны проверить
//if the instance is equal to our custom error, тогда мы туда пропустим наш статус код и сообщение об ошибке
//однако, если будут другие ошибки, мы будем использовать res.status(500) и то, что у нас было уже прописано.

const { CustomAPIError } = require("../errors/custom_error");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  // return res.status(err.status).json({ msg: err.msg, err });
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong", err });
};

module.exports = errorHandlerMiddleware;
