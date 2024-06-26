import { escapar } from "../decorators/escapar.js";
import Negociacoes from "../models/negociacoes.js";
import View from "./view.js";

export default class NegociacoesView extends View<Negociacoes> {

  @escapar
  protected template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map(negociacao => (
          `
          <tr>
            <td>${this.formatarData(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${this.formatarValor(negociacao.valor)}</td>
          </tr>
          `
        )).join('')}
      </tbody>
    </table>
    `;
  }

  private formatarData(data: Date): string {
    return new Intl.DateTimeFormat()
      .format(data);
  }

  private formatarValor(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

}