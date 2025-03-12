const fs = require('fs');
const path = require('path');


const dataFilePath = path.join(__dirname, '../resource/data.json'); 

exports.getCharacters = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error al leer el archivo data.json:', err);
    return [];
  }
};
