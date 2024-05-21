import { INegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import Negociacao from "../models/negociacao.js";

export class NegociacoesService {
  public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return await fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((dados: INegociacoesDoDia[]) => (
        dados.map(dadoDeHoje => {
          return new Negociacao(
            new Date(),
            dadoDeHoje.vezes,
            dadoDeHoje.montante
          );
        })
    ))
  }
}