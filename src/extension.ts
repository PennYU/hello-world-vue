import * as vscode from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";
import DeviceManager from "./views/device-view";
import ProjectManager, { ProjectItem } from "./views/project-view";
import ResourceTreeProvider from "./views/resource-tree";
import TerminalManager from "./views/terminal-view";

export function activate(context: vscode.ExtensionContext) {
  const showHelloWorldCommand = vscode.commands.registerCommand("hello-world.showHelloWorld", () => {
    HelloWorldPanel.render(context.extensionUri);
  });

  context.subscriptions.push(showHelloWorldCommand);

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

  const newProjectCommand = vscode.commands.registerCommand("hello-world.newProject", () => {
    projectManager.addProject(new ProjectItem('project 001', '', []));
  });
  context.subscriptions.push(newProjectCommand);
}
