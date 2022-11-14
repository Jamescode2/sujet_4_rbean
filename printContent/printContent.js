var fs = require('fs');
function printContent(file) {
  if (file!=undefined) {
    fs.readFile(file, 'utf8', (err,data)=> {
      if (err) console.error("An error occurred");
      console.log(data); 
    });
  } else {
   console.log("An error occurred"); 
  }
}
// asynchrone
// fs.readFile('/etc/passwd', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// synchrone
// var text = fs.readFileSync('test.md','utf8')
// console.log (text)
module.exports = printContent;