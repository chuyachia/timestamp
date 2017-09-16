var express = require('express');
var app = express();
// directory containing static files (js,css)
app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/:date",function(req,res){
  var resdate = parsedate(req.params.date);
  res.send(resdate);
})

function parsedate(str) {
  var input;
  if (!isNaN(str)) {
    input = Number(str)*1000;
  } else {
    input = str;
  }
  var obj ={};
  var date = new Date(input);
  if (date =='Invalid Date') {
    obj['unix'] =null;
    obj['natural'] = null;
  } else {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();  
    obj['unix'] = date.getTime()/1000;
    obj['natural'] = monthname[month]+" "+day+", "+year;
  }
    return obj;
}
var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
