import * as vscode from 'vscode';

import { ResourceItem } from './resource-item';

export class TerminalItem extends ResourceItem {

}

export default class ProjectView implements vscode.TreeDataProvider<TerminalItem> {
  getTreeItem(element: TerminalItem): TerminalItem {
    return element;
  }

  getChildren(element: TerminalItem): TerminalItem[] {
    if (element && element.children) {
      return element.children;
    }
    return [
      new TerminalItem('terminal 001', 'terminal', 'cmd001', []),
    ];
  }
}