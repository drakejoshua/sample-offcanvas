function opensidenav() {
    document.getElementsByTagName('aside')[0].style.width = "20%";
    document.getElementsByTagName('aside')[0].style.padding = "10px";
    document.getElementsByTagName('main')[0].style.setProperty( "margin-left", "20%" );
}

function closesidenav() {
    document.getElementsByTagName('aside')[0].style.width = "0%";
    document.getElementsByTagName('aside')[0].style.padding = "0px";
    document.getElementsByTagName('main')[0].style.setProperty( "margin-left", "0%" );
}