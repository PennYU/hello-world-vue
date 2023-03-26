import * as vscode from 'vscode';
import { COMMAND } from '../constants';

import { ResourceItem } from './resource-item';

export class DeviceItem extends ResourceItem {
  constructor(label: string, command: string, args: any[]) {
    super(label, '$(device-mobile)', 'deviceItem', command, args);
  }
}

export default class DeviceManager {
  public readonly root: DeviceItem = new ResourceItem(
    'Device', '$(device-mobile)', 'device', COMMAND.listDevices, []);
  
  constructor(private readonly context: vscode.ExtensionContext,
    private readonly refresh: vscode.EventEmitter<void>
  ) {}

  addProject(project: DeviceItem) {
    this.root.children.unshift(project);
    this.refresh.fire();
  }
}