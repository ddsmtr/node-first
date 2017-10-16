/* GET home page. */

// тут я обрабатываю запрос, и посылаю ответ
exports.index = function(req, res){
  res.render('index');
};
exports.lab2 = function(req,res){
    res.render('lab2');
};
exports.solveLab1 = (req,res) => {
    res.json(req.body.fx);
    // тут вставляется код обработчика
    //можно сдлать в виде отдельного модуля
    // этот файл с функциями и подключить его сюда
    // чтобы не засорять
};
