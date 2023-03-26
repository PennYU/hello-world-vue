import * as vscode from 'vscode';

import { ResourceItem } from './resource-item';

export class TerminalItem extends ResourceItem {
  constructor(label: string, command: string, args: any[]) {
    super(label, '$(console)', 'terminalItem', command, args);
  }
}

export default class TerminalManager {
  public readonly root: TerminalItem = new ResourceItem('Terminal', '$(console)', 'terminal', '', []);
  
  constructor(private readonly refresh: vscode.EventEmitter<void>) {}

  addProject(project: TerminalItem) {
    this.root.children.unshift(project);
    this.refresh.fire();
  }
}