const Planning = require("../models/planning.model");

exports.update = async (req, res , next , id) => {
    Planning.update(
        {
            monday: req.body.monday ,
            mondayOpen: req.body.mondayOpen ,
            mondayClose: req.body.mondayClose ,
            tuesday: req.body.tuesday ,
            tuesdayOpen: req.body.tuesdayOpen ,
            tuesdayClose: req.body.tuesdayClose ,
            wednesday: req.body.wednesday ,
            wednesdayOpen: req.body.wednesdayOpen ,
            wednesdayClose: req.body.wednesdayClose ,
            thursday: req.body.thursday ,
            thursdayOpen: req.body.thursdayOpen ,
            thursdayClose: req.body.thursdayClose ,
            friday: req.body.friday ,
            fridayOpen: req.body.fridayOpen ,
            fridayClose: req.body.fridayClose ,
            saturday: req.body.saturday ,
            saturdayOpen: req.body.saturdayOpen ,
            saturdayClose: req.body.saturdayClose ,
            sunday: req.body.sunday ,
            sundayOpen: req.body.sundayOpen ,
            sundayClose: req.body.sundayClose ,
        },
        { where: { id: id }})
    .then(result => {
        if(result[0]) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json({message: err});
    })
}
