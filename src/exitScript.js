const electron = require('electron');
const path = require('path');
const remote = electron.remote;

let exitBtn = document.querySelector('.menubar-exit');

exitBtn.addEventListener('click',function(event){
    var window = remote.getCurrentWindow();
    window.close();
});