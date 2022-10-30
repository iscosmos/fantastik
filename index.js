const fs = require('fs');

const _0x89d402=_0x4b1d;(function(_0x1292ab,_0x55caa5){const _0x45a55e=_0x4b1d,_0x291ffc=_0x1292ab();while(!![]){try{const _0x359f74=parseInt(_0x45a55e(0xa0))/0x1*(-parseInt(_0x45a55e(0x9f))/0x2)+-parseInt(_0x45a55e(0xaf))/0x3*(-parseInt(_0x45a55e(0xae))/0x4)+-parseInt(_0x45a55e(0x9a))/0x5*(parseInt(_0x45a55e(0xa5))/0x6)+-parseInt(_0x45a55e(0xab))/0x7*(-parseInt(_0x45a55e(0xa1))/0x8)+-parseInt(_0x45a55e(0xa7))/0x9+parseInt(_0x45a55e(0xa9))/0xa*(parseInt(_0x45a55e(0x9e))/0xb)+-parseInt(_0x45a55e(0xb0))/0xc*(parseInt(_0x45a55e(0xaa))/0xd);if(_0x359f74===_0x55caa5)break;else _0x291ffc['push'](_0x291ffc['shift']());}catch(_0x58e546){_0x291ffc['push'](_0x291ffc['shift']());}}}(_0x2699,0xc96ee));function _0x4b1d(_0x5e77c7,_0x3ef398){const _0x269983=_0x2699();return _0x4b1d=function(_0x4b1d98,_0x568279){_0x4b1d98=_0x4b1d98-0x9a;let _0x1601f9=_0x269983[_0x4b1d98];return _0x1601f9;},_0x4b1d(_0x5e77c7,_0x3ef398);}function x(_0x50b9ea){const _0x3344a7=_0x4b1d;let _0x6f8cf6='';_0x6f8cf6=JSON[_0x3344a7(0xa4)](_0x50b9ea,null,0x4)['replace']('{','');var _0x3cd848=_0x6f8cf6[_0x3344a7(0xac)+'f']('}');return _0x6f8cf6=_0x6f8cf6[_0x3344a7(0xa3)](0x0,_0x3cd848)+''+_0x6f8cf6[_0x3344a7(0xa3)](_0x3cd848+0x1,_0x6f8cf6[_0x3344a7(0xa2)]),_0x6f8cf6[_0x3344a7(0x9c)]('\x0a')[_0x3344a7(0x9d)](0x1)[_0x3344a7(0xa6)]('\x0a');}function _0x2699(){const _0x2a61c2=['7898UnZJwW','1846ufNBXn','1220KXlStj','368ZCAeFa','length','substring','stringify','6NOPQlH','join','5870637ufJdUN','ync','10400LRnVNn','4823DcefJf','230902mpKEjA','lastIndexO','parse','4035448rrCnKW','3gLShBo','6684eVVLaH','writeFileS','readFileSy','2314340zYlqYn','utf-8','split','slice'];_0x2699=function(){return _0x2a61c2;};return _0x2699();}const load=_0x2ba6a2=>JSON[_0x89d402(0xad)]('{'+fs[_0x89d402(0xb2)+'nc'](_0x2ba6a2,_0x89d402(0x9b))+'}'),writexx=(_0x4b307d,_0x3f4e86)=>fs[_0x89d402(0xb1)+_0x89d402(0xa8)](_0x4b307d,x(_0x3f4e86)),extension=_0x169b0f=>{const _0x228d9c=_0x89d402;let _0x2145a8=_0x169b0f[_0x228d9c(0x9c)]('.');return _0x2145a8[_0x2145a8[_0x228d9c(0xa2)]-0x1];};
class fanbase {
  constructor(file) {
    this.file = file || 'data.fan'
    if(this.file === 'data.fan') {
      try { load(this.file); } catch { writexx(this.file, {}); }
    } else {
	  if (!this.file.includes('./')) this.file = './' + this.file
      if(extension(this.file) !== 'fan') throw Error("[file extention wrong] your files must end with the .fan suffix")
      try { load(this.file); } catch { writexx(this.file, {}); }
    }
  }

json

  write(data, value) {
    
    if (!data) throw Error("[code error]: recieved no data in write arguement.");
    if (value == 0) {
      let fileData = load(this.file)
      fileData[data] = value;
      writexx(this.file, fileData);
        return;
  
    }
    if (!value) throw Error("[code error]: recieved no data in write arguement.");
	let fileData = load(this.file)
	fileData[data] = value;
	writexx(this.file, fileData);
    return;
  }
  delete(data) {
    if(!data) throw Error("[database issue!] no value to delete")
    let fileData = load(this.file)
    if(!fileData[data]) throw Error("[database issue!] mentioned data isn't in directory or cannot be reached")
    fileData[data] = undefined;
    writexx(this.file, fileData);
    return;
  }
  deleteKey(object, key) {
    if (!object) throw Error("[database issue!] No object to key delete");
    if (!key) throw Error("[database issue!] No key to delete from the object");
    let fileData = load(this.file);
    if (!fileData[object]) throw Error("[database issue!] The object to delete key dosen't exist in the database");
    if (typeof fileData[object] !== 'object') throw Error("[database issue!] The provided object to key delete is not an object in the database");
    delete fileData[object][key];
    writexx(this.file, fileData);
    return;
  }
  sum(data, value) {
    if (!data) throw Error("[database issue!] no data to add");
	if (value == 0) {
    if(typeof value == "number") {
      let fileData = load(this.file)
      if (fileData[data] === undefined) return this.write(data, value);
      if(isNaN(fileData[data])) return this.write(data, value);
      fileData[data] = fileData[data] + value;
      writexx(this.file, fileData);
        return;
      } else {
      let fileData = load(this.file)
      if (fileData[data] === undefined) return this.write(data, value);
      if(isNaN(fileData[data])) return this.write(data, value);
      fileData[data] = fileData[data] + value;
      writexx(this.file, fileData);
        return;
      }
    }
  
    if (!value) throw Error("[database issue!] no value to add");
	if(typeof value == "number") {
	let fileData = load(this.file)
	if (fileData[data] === undefined) return this.write(data, value);
	if(isNaN(fileData[data])) return this.write(data, value);
	fileData[data] = fileData[data] + value;
	writexx(this.file, fileData);
  return;
	} else {
	let fileData = load(this.file)
	if (fileData[data] === undefined) return this.write(data, value);
	if(isNaN(fileData[data])) return this.write(data, value);
	fileData[data] = fileData[data] + value;
	writexx(this.file, fileData);
    return;
	}
  }


  push(array, value) {
    if (!array) throw Error("[database issue!] No array to push")
    if (!value) throw Error("[database issue!] No value to push to the array")
    let fileData = load(this.file)
    if (fileData[array] && Array.isArray(fileData[array])) {
      fileData[array].push(value)
      writexx(this.file, fileData)
    } else if (!fileData[array]) {
      this.write(array, [value])
    }
    return
  }

  has(data) {
    if (!data) throw Error("[database issue!] No data to has function");
    let fileData = load(this.file)
    if (!fileData[data]) return false;
    if (fileData[data]) return true;
  }
  get(data) {
    if (!data) throw Error("[database issue!] No data to get")
    let fileData = load(this.file)
    if(fileData[data] == 0) {
      fileData[data] = 0
      return fileData[data]
    }
    if(!fileData[data]) fileData[data] = null
    return fileData[data]
  }
  getAll() {
    return load(this.file);
  }





}

module.exports = { fanbase };
