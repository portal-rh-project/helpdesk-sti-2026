function onFormSubmitHelpDesk(e) {
  try {
    Utilities.sleep(2000); 
    
    var sheet = e.range.getSheet();
    var row = e.range.getRow();

    var emailColaborador = e.values[1]; 
    var nomeColaborador = e.values[2];  

    var memoria = PropertiesService.getScriptProperties();
    var ultimo = parseInt(memoria.getProperty('contagem')) || 0;
    var novo = ultimo + 1;
    memoria.setProperty('contagem', novo);
    var protocolo = "STI-2026-" + ("000" + novo).slice(-3);

    sheet.getRange(row, 11).setValue(protocolo); 
    sheet.getRange(row, 12).setValue("PENDENTE"); 

    var listaSuporte = "informatica@sinpeem.com.br, suporte@sinpeem.com.br";
    var assuntoSuporte = "NOVO CHAMADO TÉCNICO: " + protocolo;
    var corpoSuporte = "Olá,\n\nUm novo chamado foi registrado.\n\n" +
                       "Solicitante: " + nomeColaborador + "\n" +
                       "Protocolo: " + protocolo + "\n" +
                       "Status: PENDENTE";

    MailApp.sendEmail(listaSuporte, assuntoSuporte, corpoSuporte);

    if(emailColaborador && emailColaborador.indexOf('@') > -1) {
      var assuntoUser = "Confirmação de Chamado: " + protocolo;
      
      // --- MUDE O TEXTO ABAIXO PARA ALTERAR A ASSINATURA ---
      var corpoUser = "Olá " + nomeColaborador + ",\n\n" +
                      "Seu chamado foi aberto com sucesso.\n" +
                      "Protocolo de acompanhamento: " + protocolo + "\n\n" +
                      "Atenciosamente,\n" + 
                      "Departamento de Tecnologia e Inovação - SINPEEM"; // <-- Escreva sua nova assinatura aqui
      // ----------------------------------------------------

      MailApp.sendEmail(emailColaborador, assuntoUser, corpoUser);
    }

  } catch (erro) {
    console.log("Erro: " + erro);
  }
}
