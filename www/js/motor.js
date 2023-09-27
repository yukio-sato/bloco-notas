var fakecd = 0;
var canon = false;
if (localStorage.getItem("codigo") == null || localStorage.getItem("codigo").toString().trim() == "")
{
    localStorage.setItem("codigo",0);
}
function loadedInfo()
{
    canon = true;
    for (var i=0 ;i < localStorage.length; i++){
    if (localStorage.key(i).substring(0,2) == "cd"){
        const tb = JSON.parse(localStorage.getItem  (localStorage.key(i)));
        fakecd = parseInt(localStorage.key(i).substring(2))
        document.getElementById("noteblockTitle").value = tb[0];
        document.getElementById("noteblock").textContent = tb[3];
        document.getElementById("timing").value = tb[2];
        document.getElementById("todayNow").value = tb[1];
        document.getElementById("todayFuture").value = tb[4];
        document.getElementById("timeLimit").value = tb[5];
        document.getElementById("cb").value = tb[6];
        document.getElementById("customImg").value = tb[7];
        copy();
        }
    }
    canon = false;
}
function save()
{
    localStorage.setItem("codigo",parseInt(localStorage.getItem("codigo"))+1);
    fakecd = localStorage.getItem("codigo");
    localStorage.setItem("cd"+localStorage.getItem("codigo").toString(),
    JSON.stringify([document.getElementById("noteblockTitle").value,
    document.getElementById("todayNow").value,
    document.getElementById("timing").value,
    document.getElementById("noteblock").value,
    document.getElementById("todayFuture").value,
    document.getElementById("timeLimit").value,
    document.getElementById("cb").value,
    document.getElementById("customImg").value]));
    alert("Salvo com sucesso!");
}
function copy()
{
    const mainDiv = document.createElement("div");
    const idCode = document.createAttribute("id");
    idCode.value = "number"+fakecd;
    mainDiv.setAttributeNode(idCode);
    const atr = document.createAttribute("custom");
    atr.value = "copied";
    mainDiv.setAttributeNode(atr);
    const inv = document.createAttribute("class");
    inv.value = "invisibleText";
    mainDiv.setAttributeNode(inv);
    const colorB = document.createAttribute("style");
    colorB.value = "border-width:3.75px;border-color:"+document.getElementById("cb").value+";background-color:"+document.getElementById("cb").value+"50";
    mainDiv.setAttributeNode(colorB);

    const cod = document.createElement("label");
    cod.textContent = "Código: "+fakecd;
    const inv2 = document.createAttribute("class");
    inv2.value = "tinyText";
    cod.setAttributeNode(inv2);

    const title = document.createElement("h1");
    title.textContent = "Titulo: "+document.getElementById("noteblockTitle").value;
    const inv3 = document.createAttribute("class");
    inv3.value = "tinyText";
    title.setAttributeNode(inv3);

    const img = document.createElement("img");
    const sizing = document.createAttribute("style");
    sizing.value = "width:100%;height:100px";
    img.setAttributeNode(sizing);
    const linked = document.createAttribute("src");
    if (document.getElementById("customImg").value){
    linked.value = document.getElementById("customImg").value;
    }
    else{
    linked.value = "./img/note.jpg";
    }
    img.setAttributeNode(linked);

    const anoted = document.createElement("label");
    anoted.textContent = "Anotado: ";
    const hiding = document.createAttribute("class");
    hiding.value = "tinyText";
    anoted.setAttributeNode(hiding);

    const dt = document.createElement("input");
    dt.value = document.getElementById("todayNow").value;
    const dtType = document.createAttribute("type");
    dtType.value = "date";
    dt.setAttributeNode(dtType);
    const disabling = document.createAttribute("disabled");
    dt.setAttributeNode(disabling);
    const tiny = document.createAttribute("class");
    tiny.value = "tinyText";
    dt.setAttributeNode(tiny);

    const tm = document.createElement("input");
    tm.value = document.getElementById("timing").value;
    const tmType = document.createAttribute("type");
    tmType.value = "time";
    tm.setAttributeNode(tmType);
    const disabling2 = document.createAttribute("disabled");
    tm.setAttributeNode(disabling2);
    const tiny2 = document.createAttribute("class");
    tiny2.value = "tinyText";
    tm.setAttributeNode(tiny2);

    const descr = document.createElement("h2");
    descr.textContent = "Descrição: "+document.getElementById("noteblock").value;
    const inv4 = document.createAttribute("class");
    inv4.value = "tinyText";
    descr.setAttributeNode(inv4);

    const outStock = document.createElement("label");
    outStock.textContent = "Prazo: ";
    const invisibling = document.createAttribute("class");
    invisibling.value = "tinyText";
    outStock.setAttributeNode(invisibling);

    const dtFuture = document.createElement("input");
    dtFuture.value = document.getElementById("todayFuture").value;
    const dtFutureType = document.createAttribute("type");
    dtFutureType.value = "date";
    dtFuture.setAttributeNode(dtFutureType);
    const disabling3 = document.createAttribute("disabled");
    dtFuture.setAttributeNode(disabling3);
    const tiny3 = document.createAttribute("class");
    tiny3.value = "tinyText";
    dtFuture.setAttributeNode(tiny3);

    const limitTime = document.createElement("input");
    limitTime.value = document.getElementById("timeLimit").value;
    const limitTimeType = document.createAttribute("type");
    limitTimeType.value = "time";
    limitTime.setAttributeNode(limitTimeType);
    const disabling4 = document.createAttribute("disabled");
    limitTime.setAttributeNode(disabling4);
    const tiny4 = document.createAttribute("class");
    tiny4.value = "tinyText";
    limitTime.setAttributeNode(tiny4);

    const btnDel = document.createElement("input");
    btnDel.value = "Remover";
    const identifying = document.createAttribute("id");
    identifying.value = "copyID"+fakecd;
    btnDel.setAttributeNode(identifying);
    const btnDelType = document.createAttribute("type");
    btnDelType.value = "button";
    btnDel.setAttributeNode(btnDelType);
    const reDel = document.createAttribute("class");
    reDel.value = "delete";
    btnDel.setAttributeNode(reDel);
    const btnFunction = document.createAttribute("onclick");
    btnFunction.value = "del(id)";
    btnDel.setAttributeNode(btnFunction);
    if (canon == true){
        var btnApply = document.createElement("input");
        btnApply.value = "Aplicar";        
        const identifying2 = document.createAttribute("id");
        identifying2.value = "copyID"+fakecd;
        btnApply.setAttributeNode(identifying2);
        const btnApplyType = document.createAttribute("type");
        btnApplyType.value = "button";
        btnApply.setAttributeNode(btnApplyType);
        const reApply = document.createAttribute("class");
        reApply.value = "copiar";
        btnApply.setAttributeNode(reApply);
        const btnFunction2 = document.createAttribute("onclick");
        btnFunction2.value = "apply(id)";
        btnApply.setAttributeNode(btnFunction2);
    }

    mainDiv.appendChild(cod);
    mainDiv.appendChild(btnDel);
    if (canon == true){
        mainDiv.appendChild(btnApply);
    }
    mainDiv.appendChild(title);
    mainDiv.appendChild(img);
    mainDiv.appendChild(anoted);
    anoted.appendChild(dt);
    anoted.appendChild(tm);
    mainDiv.appendChild(descr);
    mainDiv.appendChild(outStock);
    outStock.appendChild(dtFuture);
    outStock.appendChild(limitTime);
    document.getElementById("copys").appendChild(mainDiv)

}

function clrs(){

var answering = confirm("Você tem certeza em limpar?");
    if (answering == true){
        localStorage.clear();
        if (localStorage.getItem("codigo") == null ||   localStorage.getItem("codigo").toString().trim() == "")
        {
        localStorage.setItem("codigo",0);
        }
        fakecd = 0;
        document.getElementById("noteblockTitle").value = "";
        document.getElementById("noteblock").value = "";
        document.getElementById("timing").value = "";
        document.getElementById("todayNow").value = "";
        document.getElementById("todayFuture").value = "";
        document.getElementById("timeLimit").value = "";
        document.getElementById("cb").value = "#FFFFFF";
        document.getElementById("customImg").value = ""

        document.getElementById("copys").remove();
        const newDiv = document.createElement("div");
        const identify = document.createAttribute("id");
        identify.value = "copys";
        newDiv.setAttributeNode(identify);
        document.getElementById("otherBody").appendChild(newDiv);
    }
}

function darkTheme(){
    var backBody = document.getElementById("otherBody");
    const darking = document.createAttribute("style");
    darking.value = "background-color: rgba(0,0,0,"+document.getElementById("darkMode").value*0.01+")"
    backBody.setAttributeNode(darking);
}

function del(idFrom){
    var answer = confirm("Você deseja remover?");
    if (answer == true){
        localStorage.removeItem("cd"+idFrom.substring(6));
        if (idFrom.substring(6) > 0){
            fakecd = idFrom.substring(6)-1;
        }
        else{
            fakecd = 0
        }
        document.getElementById("noteblockTitle").value = "";
        document.getElementById("noteblock").value = "";
        document.getElementById("timing").value = "";
        document.getElementById("todayNow").value = "";
        document.getElementById("todayFuture").value = "";
        document.getElementById("timeLimit").value = "";
        document.getElementById("cb").value = "#FFFFFF";
        document.getElementById("customImg").value = ""
        document.getElementById("number"+idFrom.substring(6)).remove();
    }
}

function apply(idFrom){
    var tbApplying = JSON.parse(localStorage.getItem("cd"+idFrom.substring(6)));
    document.getElementById("noteblockTitle").value = tbApplying[0];
    document.getElementById("noteblock").textContent = tbApplying[3];
    document.getElementById("timing").value = tbApplying[2];
    document.getElementById("todayNow").value = tbApplying[1];
    document.getElementById("todayFuture").value = tbApplying[4];
    document.getElementById("timeLimit").value = tbApplying[5];
    document.getElementById("cb").value = tbApplying[6];
    document.getElementById("customImg").value = tbApplying[7];
    alert("Aplicado com sucesso!");
}

function finding(txtSearch){
    var child = document.getElementById("copys").children;
    for (var i = 0; i < child.length; i++) {
        var otherChild = child[i].children;
        const ilusion = document.createAttribute("hidden");
        child[i].setAttributeNode(ilusion);
        for (var i2 = 0; i2 < otherChild.length; i2++) {
            if (otherChild[i2].textContent.substring(0,8) == "Titulo: "){
                if (otherChild[i2].textContent.substring(8,8+txtSearch.length) == txtSearch){
                    child[i].removeAttribute("hidden");
                }
            }
        }
    }
}