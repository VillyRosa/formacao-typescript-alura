import View from "./view.js";
export default class NegociacoesView extends View {
    template(model) {
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
        ${model.lista().map(negociacao => (`
          <tr>
            <td>${this.formatarData(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${this.formatarValor(negociacao.valor)}</td>
          </tr>
          `)).join('')}
      </tbody>
    </table>
    `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
    formatarValor(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor);
    }
}