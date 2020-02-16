const fs = require('fs')
const path = require('path')

class FileIO {
  static writeJson(filePath, inputData) {
    const jsonString = JSON.stringify(inputData, null, 2)
    fs.writeFile(path.join(__dirname, filePath), jsonString, err => {
      console.log(jsonString)
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('Successfully wrote file')
      }
    })
  }

  static readJson(filePath, callback) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return callback && callback(err)
      }
      try {
        const object = JSON.parse(fileData)
        return callback && callback(null, object)
      } catch (err) {
        return callback && callback(err)
      }
    })
  }
}

module.exports = FileIO
