var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,127,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,109,97,105,110,0,0,10,222,128,128,128,0,1,216,128,128,128,0,1,1,127,65,0,40,2,12,65,200,0,58,0,0,65,0,40,2,12,65,229,0,58,0,1,65,0,40,2,12,65,236,0,58,0,2,65,0,40,2,12,65,236,0,58,0,3,65,0,40,2,12,34,0,66,239,192,152,147,247,173,155,144,215,0,55,0,4,32,0,65,193,166,1,59,0,12,32,0,65,205,0,58,0,14,65,15,11,11,138,128,128,128,0,1,0,65,12,11,4,0,0,0,0]);
var wasmModule = new WebAssembly.Module(wasmCode);
var wasmMemory = new WebAssembly.Memory({initial:1, maximum:10, shared:false});
var wasmImport = { 
  env: { 
    memory: wasmMemory.buffer,
  }
};
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImport);

var size = wasmInstance.exports.main();
var buffer = new Uint8Array(wasmInstance.exports.memory.buffer, 0, size);
var hello = (new TextDecoder()).decode(buffer);
log(hello);
