import * as vscode from 'vscode';

import { ResourceItem } from './resource-item';

export class ProjectItem extends ResourceItem {
  constructor(label: string, command: string, args: any[]) {
    super(label, '$(folder)', 'projectItem', command, args);
  }
}

export default class ProjectManager {
  public readonly root: ProjectItem = new ResourceItem('Project', '$(project)', 'project', '', []);
  
  constructor(private readonly refresh: vscode.EventEmitter<void>) {}

  addProject(project: ProjectItem) {
    this.root.children.unshift(project);
    this.refresh.fire();
  }
}