var db=require('/home/ubuntu/pdmc/api/routes/db/dbconnect');

var Data = {
    getCrop:function(Logindata, callback) {
        console.log("ping");
        
        return db.query("CALL jharkhand_pdmc.sp_crop(?,?,?,?)",[Logindata.mode, Logindata.name, Logindata.id, Logindata.status],callback);
    }

};

module.exports=Data;