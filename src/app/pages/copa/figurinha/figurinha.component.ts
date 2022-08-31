import { Component, EventEmitter, INJECTOR, Input, OnInit, Output } from '@angular/core';
import { Album, Figurinha, Pais } from 'src/app/core/middleware/Model/album.model';

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

  constructor() { }

  ngOnInit(): void {
  }
}
