// Classe que representa um nó da lista
class Node {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  // Classe da lista encadeada
  class ListaEncadeada {
    constructor() {
      this.cabeca = null; // Primeiro nó da lista
    }
  
    // Adiciona um novo número ao final da lista
    adicionar(valor) {
      const novoNo = new Node(valor);
  
      if (!this.cabeca) {
        this.cabeca = novoNo;
      } else {
        let atual = this.cabeca;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
    }
  
    // Exibe os valores da lista
    imprimir() {
      let atual = this.cabeca;
      while (atual) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }
  }
  
  // Exemplo de uso
  const lista = new ListaEncadeada();
  
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  
  lista.imprimir();
  // Saída: 10, 20, 30
  