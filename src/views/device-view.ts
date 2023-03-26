import * as vscode from 'vscode';

import { ResourceItem } from './resource-item';

export class DeviceItem extends ResourceItem {

}

export default class ProjectView implements vscode.TreeDataProvider<DeviceItem> {
  getTreeItem(element: DeviceItem): DeviceItem {
    return element;
  }

  getChildren(element: DeviceItem): DeviceItem[] {
    if (element && element.children) {
      return element.children;
    }
    return [
      new DeviceItem('device 001', 'device', 'cmd001', []),
    ];
  }
}