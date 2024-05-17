const con = require('../../config/db')

const getAll = (req, res)=>{
    // console.log('dfdfs')
    // return
    con.query('SELECT * FROM `tbl_title` WHERE 1', (err, data)=>{
        if(err){
            console.log(err)
        }
        res.render('admin/titleRead', {title: 'Read Title', data });
    })
};

const create_get = (req, res)=>{
    res.render('admin/titleCreate', {title: 'Create Title'});

}

const create_post = (req, res) => {
    console.log(req.body);
    // return;
    con.query('INSERT INTO `tbl_title`(`title_name`) VALUES (?)', [req.body.title_name], (err, data)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/titleRead');
    })
}
const  deleteTitle = (req, res) => {
    con.query('DELETE FROM `tbl_title` WHERE id = ?', [req.params.id], (err, data) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/titleRead');
    });
}

const  editTitle = (req, res) => {
    // console.log(req.params.id);
    // return;
    con.query('SELECT * FROM `tbl_title` WHERE id = ? ', [req.params.id], (err, data) =>{
        if(err){
            console.log(err);
        }
        res.render('admin/titleEdit', { title:"Edit Title", result: data[0] });
    })    
}

const  editTitlePost = (req, res) => {
    // console.log(req.body);
    // return;
    con.query('UPDATE `tbl_title` SET `title_name`= ? WHERE id = ?;',[req.body.title_name, req.params.id], (err, data) =>{
        if(err){
            console.log(err);
        }
        res.redirect('/titleRead');
    })    
}


module.exports = {
    getAll,
    create_get,
    create_post,
    deleteTitle,
    editTitle,
    editTitlePost,
}