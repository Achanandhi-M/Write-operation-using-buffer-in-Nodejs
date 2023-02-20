var fs=require('fs')
var buf=new Buffer(1024);
console.log("Going to open an existing file")
//opening a file
fs.open('file.txt','w+',function(err,data){
    if(err){
      return  console.log(err)
    }
 console.log("File opened successfully")
 console.log("going to write")
 fs.writeFile('file.txt','New info ',function(err,bytes){
 if(err){
  console.log(err)
 }
 console.log( bytes + "bytes read")
if(bytes>0){
  console.log(buf.slice(0,bytes.length).toString());
}
});
fs.close(data,function(err){
  if(err){
    console.log(err)
  }
  console.log("File closed")
});
});