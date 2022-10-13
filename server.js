var express = require('express');
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/koans'));
app.use(express.static(__dirname + '/public'));

app.use('/', function(req,res){
    res.render('index.html');
});


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })