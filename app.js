String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

async function process(text){
    ut =await text.allReplace({'$':'','^':'','#':'','!':''});
    console.log(ut);
    return ut;
}


async function button() {

let [fileHandle] = await window.showOpenFilePicker();
let fileData = await fileHandle.getFile();
let text = await fileData.text();
let r =await process(text)
document.getElementById("output").innerHTML = r;
document.getElementById("w_count").innerHTML = "Word Count :"+ r.split(" ").length;
}