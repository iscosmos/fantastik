const fs = require('fs');
const _0x1d8a2f=_0x3639;(function(_0x343f53,_0x109ced){const _0x1543bd=_0x3639,_0x3a21b7=_0x343f53();while(!![]){try{const _0x92abd5=parseInt(_0x1543bd(0x101))/0x1*(-parseInt(_0x1543bd(0xfe))/0x2)+-parseInt(_0x1543bd(0xf2))/0x3*(-parseInt(_0x1543bd(0xf9))/0x4)+parseInt(_0x1543bd(0xef))/0x5*(parseInt(_0x1543bd(0xf6))/0x6)+-parseInt(_0x1543bd(0xfd))/0x7*(-parseInt(_0x1543bd(0xf1))/0x8)+parseInt(_0x1543bd(0xff))/0x9*(parseInt(_0x1543bd(0xf3))/0xa)+parseInt(_0x1543bd(0xf5))/0xb+parseInt(_0x1543bd(0xf8))/0xc*(-parseInt(_0x1543bd(0xf4))/0xd);if(_0x92abd5===_0x109ced)break;else _0x3a21b7['push'](_0x3a21b7['shift']());}catch(_0xfb4562){_0x3a21b7['push'](_0x3a21b7['shift']());}}}(_0xc6ad,0xaad11));function _0xc6ad(){const _0x55e57e=['lastIndexOf','substring','length','35567tLKKxV','846wqoYsK','9zljEoQ','replaceAll','2825amdRWY','parse','stringify','split','5ryTAiz','writeFileSync','1096pfbTZj','183813aWcSsX','4108460JuwbqC','3839836qDQFnO','1636734SsoNLR','3032268KsKVPo','replace','12xHtFqD','28rxfzGB'];_0xc6ad=function(){return _0x55e57e;};return _0xc6ad();}function x(_0x47cd59){const _0x19cb81=_0x3639;let _0x252352='';_0x252352=JSON[_0x19cb81(0xed)](_0x47cd59,null,0x4)[_0x19cb81(0x100)](',',';')[_0x19cb81(0x100)](':','=')[_0x19cb81(0xf7)]('{','');var _0x3c7608=_0x252352[_0x19cb81(0xfa)]('}');return _0x252352=_0x252352[_0x19cb81(0xfb)](0x0,_0x3c7608)+''+_0x252352[_0x19cb81(0xfb)](_0x3c7608+0x1,_0x252352[_0x19cb81(0xfc)]),_0x252352['split']('\x0a')['slice'](0x1)['join']('\x0a');}function _0x3639(_0x4b1b7b,_0x3ca19f){const _0xc6ad79=_0xc6ad();return _0x3639=function(_0x36393e,_0x4a961f){_0x36393e=_0x36393e-0xec;let _0x42cc2e=_0xc6ad79[_0x36393e];return _0x42cc2e;},_0x3639(_0x4b1b7b,_0x3ca19f);}const load=_0x1a8d51=>JSON[_0x1d8a2f(0xec)]('{'+fs['readFileSync'](_0x1a8d51,'utf-8')['replaceAll'](';',',')[_0x1d8a2f(0x100)]('=',':')+'}'),writexx=(_0x27c3ce,_0x356a8b)=>fs[_0x1d8a2f(0xf0)](_0x27c3ce,x(_0x356a8b)),extension=_0x1a22aa=>{const _0x2611a3=_0x1d8a2f;let _0x4c15fb=_0x1a22aa[_0x2611a3(0xee)]('.');return _0x4c15fb[_0x4c15fb[_0x2611a3(0xfc)]-0x1];};
class fanbase {
  constructor(file) {
    this.file = file || 'data.fan'
    if(this.file === 'data.fan') {
      try { load(this.file); } catch { 
        writexx(`corrupted/${this.file}`, {}); 
        writexx(this.file, {});
      }
    } else {
	  if (!this.file.includes('./')) this.file = './' + this.file
      if(extension(this.file) !== 'fan') throw Error("[file extention wrong] your files must end with the .fan suffix")
      try { load(this.file); } catch { 
        writexx(`corrupted/${this.file}`, {}); 
        writexx(this.file, {});
      }    }
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
