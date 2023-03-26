import * as vscode from 'vscode';

import { COMMAND } from '../constants';
import { ResourceItem } from './resource-item';

export default class ResourceTreeProvider implements vscode.TreeDataProvider<ResourceItem> {
  public changeEvent = new vscode.EventEmitter<void>();

  private readonly roots: ResourceItem[] = [];

  constructor() {
    this.roots.push(new ResourceItem('Home', '$(home)', 'home', COMMAND.showHelloWorld, []));
  }

  public get onDidChangeTreeData(): vscode.Event<void> {
    return this.changeEvent.event;
  }

  getTreeItem(element: ResourceItem): ResourceItem {
    if (element.children && element.children.length) {
      if (element.collapsibleState === vscode.TreeItemCollapsibleState.None) {
        element.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
      }
    }
    return element;
  }

  getChildren(element: ResourceItem): ResourceItem[] {
    if (element && element.children) {
      return element.children;
    }
    return this.roots;
  }

  addTreeItem(item: ResourceItem) {
    this.roots.push(item);
  }
}