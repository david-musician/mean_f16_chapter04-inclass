module.exports.showStudentName = function(req, res) {
  res.render('index', { firstName: 'Daniel', lastName: 'Maratta'});
};