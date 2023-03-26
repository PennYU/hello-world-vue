import * as vscode from 'vscode';

export class ResourceItem extends vscode.TreeItem {
  public readonly children: ResourceItem[] = [];
  constructor(label: string, iconPath: string, contextValue: string, command: string, args: any[]) {
    super(label);
    if (iconPath.startsWith('$(') && iconPath.endsWith(')')) {
      this.iconPath = new vscode.ThemeIcon(iconPath.slice(2, iconPath.length - 1));
    } else {
      this.iconPath = iconPath;
    }
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