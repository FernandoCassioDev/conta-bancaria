import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _aniversario: string;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: string
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario() {
    return this._aniversario;
  }

  public set aniversario(value: string) {
    this._aniversario = value;
  }

  visualizar(): void{
    super.visualizar()
    console.log(`\nAniversario: ${this._aniversario}`)
  }
}
