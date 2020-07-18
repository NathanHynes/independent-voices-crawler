const neatCsv = require("neat-csv")
const fs = require("fs").promises
const path = require("path")
const filePath = path.resolve(__dirname, "../csv-files/Sheet1.csv")

  console.log('I am running ')
//
//   const getSpreadsheetData = () => {
//   return new Promise(function(resolve, reject){
//      fs.readFile(filePath, (err, data) => {
//        if (err) {
//          return reject(err);
//        }
//        resolve(neatCsv(data))
//      })
//  })
// }
//
// getSpreadsheetData().then((res) => {
//  return res
// })

  const getSpreadsheetData = async () => {
    const data = await fs.readFile(filePath)
    return await neatCsv(data)
  }

  // fs.readFile(filePath, async (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //    console.log('promise', neatCsv(data))
  //    console.log('promise fulfilled', await neatCsv(data))
  //    neatCsv(data)
  // })

  (async () => {
  const loadedCSV = await getSpreadsheetData()
  console.log('loadedCSV', loadedCSV)
  return loadedCSV
})();
