//importa a classe color e o readline
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from "./src/util/Colors";

import readlinesync = require("readline-sync");

//função principal
export function main() {
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tipoContas = ["Conta Corrente", "Conta Poupança"];

  const contas: ContaController = new ContaController();

  //Objetos da Classe ContaCorrente
  contas.cadastrar(
    new ContaCorrente(
      contas.gerarNumero(),
      1234,
      1,
      "Fernando Cassio",
      10000.0,
      10000
    )
  );

  //Objetos da classe ContaPoupanca
  contas.cadastrar(
    new ContaPoupanca(contas.gerarNumero(), 123, 2, "john doe", 10000, 18112005)
  );

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
    console.log("            9 - Consultar conta por titular          ");
    console.log("            10 - Sair                                ");
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
    if (opcao == 10) {
      console.log(
        colors.fg.yellowstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui!"
      );
      console.log(colors.reset, "");
      sobre();
      process.exit(0);
    }

    //realiza o procedimento escolhido pelo usuario
    console.log(colors.fg.whitestrong, "");
    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");

        console.log("Digite o número da Agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do titular: ");
        titular = readlinesync.question("");

        console.log("Digite o tipo da conta: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        console.log("Digite o saldo da conta: ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );

            break;
          case 2:
            console.log("Digite o aniversario da conta: ");
            aniversario = readlinesync.questionInt("");

            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        keyPress();
        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        console.log("Digite o número da Conta:");
        numero = readlinesync.questionInt("");

        contas.procurarPorNumeros(numero);
        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        console.log("Digite o número da Conta:");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta) {
          console.log("Digite o número da Agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o nome do titular: ");
          titular = readlinesync.question("");

          console.log("Digite o saldo da conta: ");
          saldo = readlinesync.questionFloat("");

          tipo = conta.tipo;
          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );

              break;
            case 2:
              console.log("Digite o aniversario da conta: ");
              aniversario = readlinesync.questionInt("");

              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(`\nA conta ${numero} não foi encontrada`);
        }

        keyPress();
        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

        console.log("\n\nApagar Conta por número\n\n");

        console.log("Digite o número da Conta:");
        numero = readlinesync.questionInt("");

        contas.deletar(numero);

        keyPress();
        break;
      case 6:
        console.log("\n\nSaque\n\n");

        console.log("Digite o número da Conta:");
        numero = readlinesync.questionFloat("");

        console.log("Digite o valor do saque:");
        valor = readlinesync.questionFloat("");

        contas.sacar(numero, valor);
        keyPress();
        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        console.log("Digite o número da Conta:");
        numero = readlinesync.questionFloat("");

        console.log("Digite o valor do deposito:");
        valor = readlinesync.questionFloat("");

        contas.depositar(numero, valor);
        keyPress();
        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

        console.log("Digite o número da Conta de origem:");
        numero = readlinesync.questionFloat("");

        console.log("Digite o número da Conta destino:");
        numeroDestino = readlinesync.questionFloat("");

        console.log("Digite o valor do saque:");
        valor = readlinesync.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);
        keyPress();
        break;
      case 9:
        console.log(
          "Digite o nome do titular da conta que você deseja consultar: "
        );

        titular = readlinesync.question("", {
          limitMessage: "Digite um nome valido!",
        });

        contas.procurarPorTitular(titular)
        break;
      default:
        console.log("\nOpção Inválida!\n");

        keyPress();
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

//solicita que o usuario pressione alguma tecla
function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

//inicia a função principal
main();
