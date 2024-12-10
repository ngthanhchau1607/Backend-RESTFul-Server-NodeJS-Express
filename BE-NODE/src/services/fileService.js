const fs = require('fs');
const path = require('path');

const uploadSingleFile = async (fileObject) => {
    let uploadPath = path.join(__dirname, "../public/images/upload");  // Sử dụng path.join() thay vì '+'
    
    // Kiểm tra nếu thư mục chưa tồn tại, tạo thư mục mới
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    let exname = path.extname(fileObject.name);
    let basename = path.basename(fileObject.name, exname);

    let finalName = `${basename}-${Date.now()}${exname}`;
    let finalPath = path.join(uploadPath, finalName);

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        };
    } catch (error) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        };
    }
};

const uploadMultipleFile =async(fileArr) =>{
    try {
        let uploadPath = path.join(__dirname, "../public/images/upload"); 
        let resultArr = [];
        let countSuccess = 0 ;
        for (let i=0 ;i<fileArr.length;i++){
            let exname = path.extname(fileObject.name);
            let basename = path.basename(fileObject.name, exname);

            let finalName = `${basename}-${Date.now()}${exname}`;
            let finalPath = path.join(uploadPath, finalName);
            try {
                await fileArr[i].mv(finalPath);
                resultArr.push ({
                    status: 'success',
                    path: finalName,
                    fileName:fileArr[i].name,
                    error: null
                });
                countSuccess++;
            } catch (error) {
                resultArr.push ( {
                    status: 'failed',
                    path: null,
                    error: JSON.stringify(error)
                });
            }
        return {
            countSuccess: countSuccess,
            detail:resultArr
        }
        }
    } catch (error) {
        
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
};