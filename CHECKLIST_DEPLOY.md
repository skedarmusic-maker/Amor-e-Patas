# ✅ Checklist de Deploy - Correção SEO

## 📋 Antes do Deploy

- [x] Instalar react-helmet-async
- [x] Criar componente SEO.tsx
- [x] Criar componente ServiceSchema.tsx
- [x] Atualizar App.tsx com HelmetProvider
- [x] Adicionar SEO na página CronogramaPelagemTosa.tsx
- [x] Fazer build de produção (`npm run build`)
- [x] Verificar pasta dist/ gerada

## 🚀 Durante o Deploy

- [ ] Fazer backup dos arquivos atuais do servidor
- [ ] Fazer upload de TODOS os arquivos da pasta `dist/` para o servidor
- [ ] Verificar se o arquivo `.htaccess` foi enviado
- [ ] Verificar se a pasta `assets/` foi enviada
- [ ] Verificar se a pasta `images/` foi enviada
- [ ] Verificar se o `sitemap.xml` foi enviado

## 🔍 Após o Deploy (Verificação)

- [ ] Acessar: https://amorepataspetshop.com.br/cronograma-pelagem-tosa
- [ ] Verificar se a página carrega corretamente
- [ ] Clicar com botão direito → "Exibir código-fonte"
- [ ] Procurar por `<link rel="canonical"` no código
- [ ] Confirmar que aparece: `href="https://amorepataspetshop.com.br/cronograma-pelagem-tosa"`
- [ ] Verificar se o title está correto: "Cronograma de Pelagem e Tosa em Uberlândia"

## 🧪 Testes de Validação

- [ ] Testar no Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Testar no Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Verificar se os dados estruturados aparecem corretamente
- [ ] Testar compartilhamento no WhatsApp/Facebook

## 📊 Google Search Console

- [ ] Aguardar 24-48h após o deploy
- [ ] Acessar Google Search Console
- [ ] Ir em "Inspeção de URL"
- [ ] Inserir: https://amorepataspetshop.com.br/cronograma-pelagem-tosa
- [ ] Clicar em "Solicitar indexação"
- [ ] Aguardar confirmação do Google

## 📈 Monitoramento (Próximos 7 dias)

- [ ] Dia 1: Verificar se a solicitação foi aceita no GSC
- [ ] Dia 3: Verificar status da indexação
- [ ] Dia 7: Confirmar que o erro foi resolvido
- [ ] Verificar se a página aparece nos resultados de busca

## 🎯 Próximas Melhorias (Opcional)

- [ ] Aplicar SEO nas outras páginas de serviço
- [ ] Adicionar Schema em `/servico-banho-tosa`
- [ ] Adicionar Schema em `/servico-limpeza-orelhas`
- [ ] Adicionar Schema em `/servico-corte-unhas`
- [ ] Adicionar Schema em `/sobre`
- [ ] Adicionar Schema em `/contato`

## 📝 Notas

**Data do Deploy:** ___/___/2026  
**Responsável:** _________________  
**Observações:** _________________

---

**Status Atual:** ✅ Build concluído - Pronto para deploy
