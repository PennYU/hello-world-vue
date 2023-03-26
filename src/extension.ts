import * as vscode from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";
import DeviceManager from "./views/device-view";
import ProjectManager, { ProjectItem } from "./views/project-view";
import ResourceTreeProvider from "./views/resource-tree";
import TerminalManager from "./views/terminal-view";
import { COMMAND } from "./constants";

export function activate(context: vscode.ExtensionContext) {
  const showHelloWorldCommand = vscode.commands.registerCommand(COMMAND.showHelloWorld, () => {
    HelloWorldPanel.render(context.extensionUri, '/home');
  });
  const listProjectsCommand = vscode.commands.registerCommand(COMMAND.listProjects, () => {
    HelloWorldPanel.render(context.extensionUri, '/projects');
  });

  const replayMessageCommand = vscode.commands.registerCommand(COMMAND.postMessageToWebView, (msg: any) => {
    HelloWorldPanel.postMessage(msg);
  });

  const linkToMessageCommand = vscode.commands.registerCommand(COMMAND.webViewLinkTo, (path: string) => {
    HelloWorldPanel.postMessage({ id: 'linkTo', success: true, message: '', path });
  });

  context.subscriptions.push(
    showHelloWorldCommand,
    listProjectsCommand,
    replayMessageCommand,
    linkToMessageCommand,
  );

  const resourceTreeProvider = new ResourceTreeProvider();
  const projectManager = new ProjectManager(resourceTreeProvider.changeEvent);
  const deviceManager = new DeviceManager(resourceTreeProvider.changeEvent);
  const terminalManager = new TerminalManager(resourceTreeProvider.changeEvent);
  resourceTreeProvider.addTreeItem(projectManager.root);
  resourceTreeProvider.addTreeItem(deviceManager.root);
  resourceTreeProvider.addTreeItem(terminalManager.root);
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider(
      'hello-world.showHome',
      resourceTreeProvider
    )
  );

  const newProjectCommand = vscode.commands.registerCommand(COMMAND.newProject, () => {
    projectManager.addProject(new ProjectItem('project 001', '', []));
  });
  const buildProjectCommand = vscode.commands.registerCommand(COMMAND.buildProject, (project: ProjectItem) => {
    console.log(project);
  });
  [
    newProjectCommand,
    buildProjectCommand,
  ].forEach(disposable => {
    context.subscriptions.push(disposable);
  });
}
