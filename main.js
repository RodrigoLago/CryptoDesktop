const{ BrowserWindow, app } = require('electron');
let win=null
function createWindow(){
      win= new BrowserWindow({
            title: 'Foo',
            hasShadow: true,
            webPreferences:{
                  nodeIntegration: true, 
                  contextIsolation: false,
            }
      })
      win.loadFile("./public/view/index.html")
      win.maximize();
}
app.whenReady().then(() => {
      createWindow()
})