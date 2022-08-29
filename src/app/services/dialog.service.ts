import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public abrirDialogSide<T>(component: ComponentType<T>) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = "100%";
    dialogConfig.maxWidth = "30%";
    dialogConfig.height = "100%";
    dialogConfig.width = "30%";

    const dialogRef = this.dialog.open(component, dialogConfig);
    dialogRef.updatePosition({ left: '70%' });
  }

  closeAll(){
    this.dialog.closeAll();
  }
}
