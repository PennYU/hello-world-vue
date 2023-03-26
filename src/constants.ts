export const COMMAND = {
  showHelloWorld: 'hello-world.showHelloWorld',
  listDevices: 'hello-world.listDevices',
  listProjects: 'hello-world.listProjects',
  listTerminals: 'hello-world.listTerminals',
  newProject: 'hello-world.newProject',
  newMmlTerminal: 'hello-world.newMmlTerminal',
  openCmakeProject: 'hello-world.openCmakeProject',
  buildProject: 'hello-world.buildProject',

  // commands for webview
  postMessageToWebView: 'hello-world.postMessageToWebView',
  webViewLinkTo: 'hello-world.webViewLinkTo',
};

export const ROUTE_LINK = {
  newMmlTerminal: '/terminals/mml/new'
};

export const STORAGE_KEY = {
  terminalId: 'hello-world.terminals',
};
