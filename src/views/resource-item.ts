import * as vscode from 'vscode';

export class ResourceItem extends vscode.TreeItem {
  public readonly children: ResourceItem[] = [];
  constructor(label: string, contextValue: string, command: string, args: any[]) {
    super(label);
    this.contextValue = contextValue;
    if (command) {
      this.command = {
        title: label,
        command,
        arguments: args,
      };
    }
  }
}