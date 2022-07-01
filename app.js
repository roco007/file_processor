async function button() {

let [fileHandle] = await window.showOpenFilePicker();
let fileData = await fileHandle.getFile();
let text = await fileData.text();
let r = text.replaceAll("#","").replaceAll("^","").replaceAll("!","").replaceAll("$","");
document.getElementById("output").innerHTML = r;
document.getElementById("w_count").innerHTML = "Word Count :"+ r.split(" ").length;
}
