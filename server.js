// link to required dependencies
var connect = require('connect');
var url = require('url');
var app = connect();

// Write a function that Accept 3 QueryString parameters: method, x, and y
var math = function(method, x, y) {
  //console.log(method+x+y)
  x = parseFloat(x);
  y = parseFloat(y);
  //console.log(method+(x+y));

  if(isNaN(x) || x == undefined || isNaN(y) || y == undefined){
    return 'Invalid Value';
  }else{

    switch(method) {
      case 'add':
      return x + ' + ' + y + ' = ' + Number(x+y);
      break;

      case 'subtract' || '-':
      return x + ' - ' + y + ' = ' + Number(x-y);
      break;

      case 'multiply' || '*' || 'x':
      return x + ' * ' + y + ' = ' + Number(x*y);
      break;

      case 'divide' || '/':
      return x + ' / ' + y + ' = ' + Number(x/y);
      break;

      default: // anything but the other declared cases
      return 'Invalid method';
      break;
    }
  }
}

// express function to call math fnction and send res
var lab3 = function(req, res, next) { // why do we use the third parameter again?
  // res.end("working like a charm, baby!"
  var qs = url.parse(req.url, true).query;
  // console.log(qs);

  var method = qs.method;
  var x = qs.x;
  var y = qs.y;

  // calling the math function
  // console.log(math(method, x, y));
  res.end(math(method, x, y));
}


app.use(lab3);
// connect to server
app.listen(3000, function(){
  console.log('Running on port 3000');
});
