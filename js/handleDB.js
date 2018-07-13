var db = require('mysql');
var connection = db.createConnection({
            host: "localhost",
            user: "root",
            password: "15061994",
            database: "discussion_pannel"
});
module.exports = {
    add_status: function (s, res) {
        var query = "insert into status(s_text,t_status) values ('" + s.status + "',CURRENT_TIMESTAMP)";
        connection.query(query, function (err, rows) {
            if (err) {
                console.log("Connot execute");
            }
            else {
                console.log("Status " + s.status + " is been added to Database");
                res.end("Yes");
            }
        });
    }
};