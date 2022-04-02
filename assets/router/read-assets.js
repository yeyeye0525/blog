const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const moment = require('moment');
const path = require('path');
let dir = path.join(__dirname, '../public/image');
let face = path.join(__dirname, '../public/face');
let github = path.join(__dirname, '../public/github');

router.get('/assets', async (req, res) => {

    //系统读取的大小看起来方便，做转换
    const formatSize = (fileSize) => {
        let result = ''
        if (fileSize >= 1048576) {
            result = fileSize % 1048576 === 0 ? fileSize / 1048576 + 'MB' : Math.trunc(fileSize / 1048576) + 'MB'
        } else if (fileSize >= 1024) {
            result = fileSize % 1024 === 0 ? fileSize / 1024 + 'KB' : Math.trunc(fileSize / 1024) + 'KB'
        } else {
            result = fileSize + 'B'
        }
        return result;
    }
    //获取正式文件夹内所有图片
    let dirData = fs.readdirSync(dir).filter(item => item != '.gitkeep').map(item => {
        return {
            name: item,
            dir: dir,
            type: 'image'
        }
    });
    let faceData = fs.readdirSync(face).filter(item => item != '.gitkeep').map(item => {
        return {
            name: item,
            dir: face,
            type: 'face'
        }
    });
    let githubData = fs.readdirSync(github).filter(item => item != '.gitkeep').map(item => {
        return {
            name: item,
            dir: github,
            type: 'github'
        }
    });
    let data = [...dirData, ...faceData, ...githubData].map(item => {
        //获取图片信息
        let fileData = fs.statSync(`${item.dir}/${item.name}`);
        // 返回格式
        return {
            name: item.name,
            size: formatSize(fileData.size),
            time: moment(fileData.birthtime).format('yyyy-MM-DD hh:mm'),
            type: item.type
        }
    }).sort((a, b) => {
        return +new Date(b.time) - (+new Date(a.time))
    });
    res.json({
        success: true,
        message: '查询静态文件',
        data: data
    });
})
module.exports = router;