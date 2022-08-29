import { Component, EventEmitter, INJECTOR, Input, OnInit, Output } from '@angular/core';
import { Album, Figurinha, Pais } from 'src/app/core/middleware/Model/album.model';
import { DialogService } from 'src/app/services/dialog.service';
import { TrocaDialogComponent } from '../troca-dialog/troca-dialog.component';

@Component({
  selector: 'app-figurinha',
  templateUrl: './figurinha.component.html',
  styleUrls: ['./figurinha.component.scss']
})
export class FigurinhaComponent implements OnInit {
  // figurinha
  figurinhaValue!: Figurinha;
  @Output()
  figurinhaChange = new EventEmitter<Figurinha>();

  @Input()
  get figurinha() {
    return this.figurinhaValue;
  }
  set figurinha(val) {
    this.figurinhaValue = val;
    this.figurinhaChange.emit(this.figurinhaValue);
  }

  // nomePais
  nomePaisValue!: string;
  @Output()
  nomePaisChange = new EventEmitter<string>();
  @Input()
  get nomePais() {
    return this.nomePaisValue;
  }
  set nomePais(val) {
    this.nomePaisValue = val;
    this.nomePaisChange.emit(this.nomePaisValue);
  }

  constructor(
    public dialogService: DialogService

  ) { }

  ngOnInit(): void {
  }
  
  public abrirTrocaDialog(){
    this.dialogService.abrirDialogSide(TrocaDialogComponent);
  }
}
