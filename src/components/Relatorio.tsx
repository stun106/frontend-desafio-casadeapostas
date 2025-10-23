import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import type { Cliente } from "../data/@types/ClienteType";

const RelatorioClientes = async (clientes: Cliente[]) => {
  const doc = new jsPDF();

  // Cabeçalho simples
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Relatório de Clientes", 105, 15, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Total de clientes: ${clientes.length}`, 14, 25);

  // Cria a tabela
  const tableColumn = ["Cliente", "Telefones", "Emails"];
  const tableRows = clientes.map((cliente) => {
    const telefones = cliente.contato?.telefones?.map(t => t.numero).join(", ") || "-";
    const emails = cliente.contato?.emails?.map(e => e.email).join(", ") || "-";

    return [
      cliente.nomeCompleto || "Sem nome",
      telefones,
      emails
    ];
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 30,
    styles: {
      fontSize: 9,
      cellPadding: 3,
      lineWidth: 0.1,
      lineColor: [200, 200, 200],
    },
    headStyles: {
      fillColor: [33, 150, 243],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    alternateRowStyles: { fillColor: [245, 245, 245] },
  });

  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(8);
  doc.text(
    `Gerado automaticamente em ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}`,
    14,
    pageHeight - 10
  );

  doc.save("relatorio_clientes.pdf");
};

export default RelatorioClientes;
