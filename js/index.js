/**
 * Created by dengmeng on 2018/7/19.
 */
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.obj.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("1'true'");
            }
        }else{
            alert("12"+url+"2〉444");
        }
    }
}
//鏀惰棌鏈珯
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("111");
        }
    }
}
//淇濆瓨鍒版闈�
function toDesktop(sUrl,sName){
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch(e)  {
        alert("222");
    }
}

function cls(){
    with(event.srcElement)
//濡傛灉褰撳墠鍊间负榛樿鍊硷紝鍒欐竻绌�
        if(value==defaultValue) value=""
}
function res(){
    with(event.srcElement)
//濡傛灉褰撳墠鍊间负绌猴紝鍒欓噸缃负榛樿鍊�
        if(value=="") value=defaultValue;}