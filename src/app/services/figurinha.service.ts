import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigurinhaService {
  // campo para manter o valor da minha figurinha
  private figurinha$ = new BehaviorSubject<any>({});
  selectFigurinha$ = this.figurinha$.asObservable();

  constructor() { }

  setFigurinha(figurinha: any){
    this.figurinha$.next(figurinha);
  }
}
