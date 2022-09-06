import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { TrocaDialogComponent } from '../troca-dialog/troca-dialog.component';
import { Album, Figurinha, Pais } from '../../../core/middleware/Model/album.model';
import { BehaviorSubject } from 'rxjs';
import { FigurinhaService } from 'src/app/services/figurinha.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public album!: Album;
  public paises!: Pais;

  constructor(
    public dialogService: DialogService,
    private figurinhaService: FigurinhaService
  ) { }

  public statusFigurinha = new BehaviorSubject<Figurinha>(new Figurinha());

  ngOnInit(): void {
    this.album = this.createAlbum();

    this.figurinhaService.selectFigurinha$.subscribe((value) => {
      // this.selectFigurinha = value
    });
  }

  public createAlbum(): Album {
    const albumAux = new Album;
    albumAux.paises = [];

    const paisesCopa = [];
    paisesCopa.push({nomePais:'BRAZIL', siglaPais: 'BRA'})
    paisesCopa.push({nomePais:'MOROCCO', siglaPais: 'MAR'})

    paisesCopa.forEach(pc => {
      const paisesAux = new Pais();

      paisesAux.nome = pc.nomePais;
      paisesAux.figurinhas = this.createFigurinha(pc.siglaPais);

      albumAux.paises.push(paisesAux);
    });

    return albumAux;
  }

  public createFigurinha(siglaPais: string) : Array<Figurinha> {
    const totalFigurinhas = 11;
    const figurinhas: Array<Figurinha> = [];

    for (let i = 1; i < totalFigurinhas; i++) {
      const figurinha = new Figurinha();
      figurinha.numero = i;
      figurinha.empenhadas = 0;
      figurinha.quantidades = 0;
      figurinha.siglaPais = siglaPais;

      figurinhas.push(figurinha);
    }

    return  figurinhas;
  }

  public abrirTrocaDialog(figurinhaPosicionada: Figurinha){
    this.statusFigurinha.next(figurinhaPosicionada)
    console.log(figurinhaPosicionada);
    this.dialogService.abrirDialogSide(TrocaDialogComponent);
  }
}
