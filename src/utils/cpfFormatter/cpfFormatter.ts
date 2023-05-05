export class CpfFormatter {
  public static addFormat(cpf: string | number): string {
    const numberCpf = cpf.toString().replaceAll(/[^\d]/g, "");
    const cpfPart1 = numberCpf.slice(0, 3);
    const cpfPart2 = numberCpf.slice(3, 6);
    const cpfPart3 = numberCpf.slice(6, 9);
    const cpfPart4 = numberCpf.slice(9, 11);

    const formattedCpf = `${cpfPart1}${cpfPart2 !== "" ? "." : ""}${cpfPart2}${
      cpfPart3 !== "" ? "." : ""
    }${cpfPart3}${cpfPart4 !== "" ? "-" : ""}${cpfPart4}`;

    return formattedCpf;
  }

  public static removeFormat(cpf: string | number): string {
    return cpf.toString().replaceAll(/[^\d]/g, "");
  }
}
