//importa a classe color e o readline
import { Conta } from "./src/model/Conta";
import { colors } from "./src/util/Colors";

import readlinesync = require("readline-sync");

//funcção principal
export function main() {
  let opcao: number;

  //objetos da Classe conta
  const c1: Conta = new Conta(1, 1234, 1, "Fernando Cassio", 10000.0);
  const c2: Conta = new Conta(2, 1234, 2, "Joe", 12000.0);

  //visualizar os dados da conta
  c1.visualizar();
  c2.visualizar();

  //visualizando saldo
  console.log(`\nO saldo da conta 01 é: ${c1.saldo}`);
  console.log(`O saldo da conta 02 é: ${c2.saldo}`);

  //alterando o saldo da conta
  c2.saldo = 3000;
  c1.saldo = 3000;
  console.log(`\nAlterando saldo da conta 1 para 3000: ${c1.saldo}`)
  console.log(`Alterando saldo da conta 2 para 3000: ${c2.saldo}`)

  //saque nas contas

  //teste para verificar se é possivel sacar mais que o saldo
  console.log(`\nSacando 4000.00 da conta 1: ${c1.sacar(4000)}`);

  console.log(`Sacando 2000.00 da conta 2: ${c2.sacar(2000)}`);


  //deposito nas contas
  c1.depositar(2000);
  c2.depositar(2000);
  console.log(`\nDepositando 2000.00 na conta 1: ${c1.saldo.toFixed(2)}`);
  console.log(`Depositando 2000.00 na conta 2: ${c2.saldo.toFixed(2)}`);

  //executa o programa até o usuario escolher sair
  while (true) {
    //mostra o menu
    console.log(
      colors.fg.yellow,
      colors.bg.black,
      "\n*****************************************************"
    );
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z               ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log(
      "                                                     ",
      colors.reset
    );

    //lê a procedimento que o usuario escolheu
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    //mostra a função sobre e finaliza o programa
    if (opcao == 9) {
      console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      process.exit(0);
    }

    //realiza o procedimento escolhido pelo usuario
    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");

        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

        break;
      case 6:
        console.log("\n\nSaque\n\n");

        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

        break;
      default:
        console.log("\nOpção Inválida!\n");

        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Fernando");
  console.log("Fernando Cassio - fernandocassiodev@gmail.com");
  console.log("github.com/Fernandocassiodev");
  console.log("*****************************************************");
}

//inicia a função principal
main();
