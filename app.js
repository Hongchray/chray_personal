const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const homeRoutes = require('./routes/admin/homeRoutes');
const titleRoutes = require('./routes/admin/titleRoutes');
const userInfoRoutes = require('./routes/admin/userInfoRoutes');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(fileupload());

//Admin
app.use(homeRoutes);
app.use(titleRoutes);
app.use(userInfoRoutes);

app.get('/blank',(req, res)=>{
    res.render('admin/blank', {title: 'Blank'});
});
app.get('/tables',(req, res)=>{
    res.render('admin/tables',{title: 'Tables'});
});

app.listen(3000, ()=>{
    console.log('Server Running');
})