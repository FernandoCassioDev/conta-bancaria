export abstract class Conta {
  //Atributos da classe (caracteristicas)
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  //Definimos o método construtor responsavel
  //por criar os objetos da classe
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  //Definido os métodos get e set de cada atributo

  /**
   * Getter numero
   * @return {number}
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Getter agencia
   * @return {number}
   */
  public get agencia(): number {
    return this._agencia;
  }

  /**
   * Getter tipo
   * @return {number}
   */
  public get tipo(): number {
    return this._tipo;
  }

  /**
   * Getter titular
   * @return {string}
   */
  public get titular(): string {
    return this._titular;
  }

  /**
   * Getter saldo
   * @return {number}
   */
  public get saldo(): number {
    return this._saldo;
  }

  /**
   * Setter numero
   * @param {number} value
   */
  public set numero(value: number) {
    this._numero = value;
  }

  /**
   * Setter agencia
   * @param {number} value
   */
  public set agencia(value: number) {
    this._agencia = value;
  }

  /**
   * Setter tipo
   * @param {number} value
   */
  public set tipo(value: number) {
    this._tipo = value;
  }

  /**
   * Setter titular
   * @param {string} value
   */
  public set titular(value: string) {
    this._titular = value;
  }

  /**
   * Setter saldo
   * @param {number} value
   */
  public set saldo(value: number) {
    this._saldo = value;
  }

  //Método Sacar dinheiro da conta
  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\nSaldo insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  //Método depositar
  public depositar(valor: number):void{
    this._saldo += valor
  }

  //Método para visualizar todos os dados do Objeto
  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta corrente";
        break;
      case 2:
        tipo = "Conta poupança";
        break;
    }

    console.log("\n****************************************************");
    console.log("dados da conta");
    console.log("\n****************************************************");
    console.log(`\nNumero da conta: ${this._numero}`);
    console.log(`\nNumero da agencia: ${this._agencia}`);
    console.log(`\nTipo da conta: ${tipo}`);
    console.log(`\nTitular da conta: ${this._titular}`);
    console.log(`\nSaldo da conta: ${this._saldo}`);
  }
}
