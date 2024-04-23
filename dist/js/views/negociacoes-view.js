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
            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
          `)).join('')}
      </tbody>
    </table>
    `;
    }
}