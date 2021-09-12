import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styles: [
  ]
})
export class DataBidingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://www.polifitema.com.br/wp-content/uploads/2017/02/success-icon-7.png";
  public textButton: string = "Habilitado";
  public texto: string = "";

  adicionarClique(){
    this.contadorClique++;

    if (this.contadorClique >= 10) {
      this.textButton = 'Desabilitado';
    }
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.texto = event.target.value;
  }
}
