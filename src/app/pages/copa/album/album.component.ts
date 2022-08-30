import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { TrocaDialogComponent } from '../troca-dialog/troca-dialog.component';
import { Album, Figurinha, Pais } from '../../../core/middleware/Model/album.model';
import { InfosDialogComponent } from '../infos-dialog/infos-dialog.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public album!: Album;
  public paises!: Pais;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.album = this.createAlbum();
  }

  public createAlbum(): Album {
    const albumAux = new Album;
    albumAux.paises = [];

    const paisesCopa = [];
    paisesCopa.push({nomePais:'BRA'})
    paisesCopa.push({nomePais:'MAR'})

    paisesCopa.forEach(pc => {
      const paisesAux = new Pais();

      paisesAux.nome = pc.nomePais;
      paisesAux.figurinhas = this.createFigurinha();

      albumAux.paises.push(paisesAux);
    });

    return albumAux;
  }

  public createFigurinha() : Array<Figurinha> {
    const totalFigurinhas = 11;
    const figurinhas: Array<Figurinha> = [];

    for (let i = 1; i < totalFigurinhas; i++) {
      const figurinha = new Figurinha();
      figurinha.numero = i;
      figurinha.empenhadas = 0;
      figurinha.quantidades = 0;

      figurinhas.push(figurinha);
    }

    return  figurinhas;
  }

  // public abrirTrocaDialog(){
  //   this.dialogService.abrirDialogSide(TrocaDialogComponent);
  // }
  
  public abrirInfosDialog(){
    this.dialogService.abrirDialogCenter(InfosDialogComponent);
  }
}
