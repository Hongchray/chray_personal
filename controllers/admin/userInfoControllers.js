const con = require('../../config/db');

const getAll = (req, res) =>{
    let sql = 'SELECT * FROM `tbl_profile` WHERE 1'; 
    con.query(sql, (err, data)=>{
        if(err){
            console.log(err)
        }
        res.render('admin/userInfoRead', {title: 'User Infomation', data });
    })
}

const InfoCreate_get = (req, res)=>{
    // console.log('Helloeee')
    res.render('admin/userInfoCreate', { title: 'User Information' });
}
const InfoCreate_post = (req, res) =>{
    // console.log(req.files)
    // return
    const file = req.files.image;
    // console.log(file)
    // return
    const date = new Date();
    const newFileName = date.getTime() + file.name;
    file.mv('./public/admin/img/' + newFileName, (err, data)=>{
        if(err){
            console.log(err)
        }
        console.log('succes')
    })

    let sql = 'INSERT INTO `tbl_profile`(`name`, `position`, `status`, `email`, `image`, `phone`, `about`) VALUES (?,?,?,?,?,?,?)';
    let body = req.body;
    let arr = [body.name, body.position, body.status, body.email, newFileName, body.phone, body.about];
    con.query(sql, arr, (err, data)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/userInfoRead');
    })
    
}

const InfoDelete = (req, res) =>{
    let id = req.params.id;
    let sql = 'DELETE FROM `tbl_profile` WHERE id = ?';
    con.query(sql, id, (err, data)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/userInfoRead');
    });
};

const InfoEdit = (req, res) =>{
    let sql = 'SELECT * FROM `tbl_profile` WHERE 1';
    let id = req.params.id;
    con.query(sql, id, (err, data)=>{
        if(err){
            console.log(err)
        }
        res.render('admin/userInfoEdit', {title: "Edit Infomartion", result: data[0]});

    })
}

const InfoEditPost = (req, res) => {
    // console.log(req.body)\
    let img = req.body.image;

    return;

    let sql = 'UPDATE `tbl_profile` SET `name`=?, `position`= ?, `status`=  ?,`email`= ? ,`phone`=? ,`about`= ? WHERE id = ?';
    let body = req.body;
    let id = req.params.id
    let arr = [body.name, body.position, body.status, body.email, body.phone, body.about, id];
    con.query(sql, arr, (err, data)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/userInfoRead');
    });
};


module.exports = {
    getAll,
    InfoCreate_get,
    InfoCreate_post,
    InfoDelete,
    InfoEdit,
    InfoEditPost,


}