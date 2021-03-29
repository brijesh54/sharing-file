const File = require('../models/file')

exports.Fetchfile = async (req, res) => {

    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if(!file){
            return res.render('download', {error: 'Link has been expired.'});
        }

        return res.render('download',{
            uuid: file.uuid,
            fileName: file.filename,
            fileSize : file.size,
            downloadLink : `${process.env.APP_BASE_URL}/files/dwonload/${file.uuid}`
            // http://localhost:3000/files/download/45s4sf54fs4-sdfsfs <------ sample of download link
        });
    } catch (error) {
        return res.render('download', {error: 'Some thing Went Wrong.'});
    }
}