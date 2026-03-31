# DOCUMENTAÇÃO TÉCNICA: SISTEMA DE HELP DESK (STI-2026)

## 1. Visão Geral
O **STI-2026** é uma solução de automação para gestão de chamados técnicos, utilizando a infraestrutura do Google Workspace.

## 2. Arquitetura do Sistema
* **Interface:** Google Forms.
* **Processamento:** Google Apps Script.
* **Banco de Dados:** Google Sheets.
* **Comunicação:** Gmail API.

## 3. Fluxo de Dados (Workflow)
1. **Submissão:** O colaborador preenche o formulário.
2. **Gatilhamento:** O evento dispara o script automático.
3. **Protocolo:** O script gera o ID sequencial (ex: STI-2026-001).
4. **Notificação:** E-mails automáticos para TI e Usuário.

## 4. Manutenção
* **Alterar e-mails:** Editar a variável `listaSuporte` no script.
* **Zerar contador:** Alterar a propriedade `contagem` para `0`.
