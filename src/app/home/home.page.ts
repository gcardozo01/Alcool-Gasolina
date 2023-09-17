import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public precoAlcool!:number;
  public precoGasolina!:number
  public resultado: String = "Resultado";

  calcular() {
    if(this.precoAlcool && this.precoGasolina) {
      let pAlcool = (this.precoAlcool)
			let pGasolina = (this.precoGasolina)

      let res = (pAlcool / pGasolina)

      if(res >= 0.7) {
        this.resultado = "Melhor utilizar Gasolina"
      } else {
        this.resultado = "Melhor utilizar Álcool"
      }
    } else {
      this.resultado = "Preencha corretamente os campos!"
    }
  }
}
