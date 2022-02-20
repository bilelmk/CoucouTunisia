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
            friday: req.body.thursdayClose ,
            fridayOpen: req.body.thursdayClose ,
            fridayClose: req.body.thursdayClose ,
            saturday: req.body.thursdayClose ,
            saturdayOpen: req.body.thursdayClose ,
            saturdayClose: req.body.thursdayClose ,
            sunday: req.body.thursdayClose ,
            sundayOpen: req.body.thursdayClose ,
            sundayClose: req.body.thursdayClose ,
        },
        { where: { id: id }})
    .then(result => {
        if(result[0]) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({message: err});
    })
}
