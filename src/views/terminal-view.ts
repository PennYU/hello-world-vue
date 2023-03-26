import * as vscode from 'vscode';
import { COMMAND, STORAGE_KEY } from '../constants';

import { ResourceItem } from './resource-item';

export class TerminalItem extends ResourceItem {
  constructor(label: string, command: string, args: any[]) {
    super(label, '$(console)', 'terminalItem', command, args);
  }
}

export default class TerminalManager {
  public readonly root: TerminalItem = new ResourceItem(
    'Terminal', '$(console)', 'terminal', COMMAND.listTerminals, []);
  
  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly refresh: vscode.EventEmitter<void>
  ) {}

  addTerminal(terminal: TerminalItem) {
    this.root.children.unshift(terminal);
    this.context.workspaceState.update(STORAGE_KEY.terminalId, this.root.children); 
    this.refresh.fire();
  }

  removeTerminal(terminalId: string) {
    this.root.children = this.root.children.filter(item => item.id !== terminalId);
  }

  listTerminals(): TerminalItem[] {
    this.root.children = this.context.workspaceState.get<TerminalItem[]>(STORAGE_KEY.terminalId) || [];
    this.refresh.fire();
    return this.root.children;
  }
}