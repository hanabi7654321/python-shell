const { PythonShell } = require('python-shell');

PythonShell.run('hello.py', null, function(err, data) {
  if (err) throw err;
  data = data.toString(data);
  console.log(data);
  });