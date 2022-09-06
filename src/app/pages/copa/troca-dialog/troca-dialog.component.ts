import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Figurinha } from 'src/app/core/middleware/Model/album.model';

@Component({
  selector: 'app-troca-dialog',
  templateUrl: './troca-dialog.component.html',
  styleUrls: ['./troca-dialog.component.scss']
})
export class TrocaDialogComponent implements OnInit {

  public statusFigurinha = new BehaviorSubject<any>({});

  figutinha!: Figurinha;

  constructor(
  ) { }

  ngOnInit(): void {
    this.statusFigurinha.subscribe((value) => {
      this.figutinha =  value;
      console.log(value)
    })
  }

}
