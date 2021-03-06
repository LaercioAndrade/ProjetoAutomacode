/*global Given, Then,When */

import TestPage from '../Pageobjects/testPage'
const PageTest = new TestPage


Given("que acesso o formulário", () => {
    PageTest.acessarSite();
})
    
When("preencho os dados", () =>{
    PageTest.preencherFirstName();
    PageTest.preencherLastName();
    PageTest.preencherAddress();
    PageTest.preencherEmail();
    PageTest.preencherTelefone();
    PageTest.selecionarSexo();
    PageTest.selecionarHobiies();
    PageTest.clicarlinguagem();
    PageTest.selecionarlinguagem();
    PageTest.selecionarskills();
    PageTest.escolherlocalização();
    PageTest.selecionarlocalização();
    PageTest.selecionarano();
    PageTest.selecionarmes();
    PageTest.selecionardia();
    PageTest.preencherpassword();
    PageTest.confirmarpassword();
})

And("clico em submit", () => {
     PageTest.salvarDados();
})

Then("valido a tela do Site", () =>{
     PageTest.validartela();
})

When("preencho os dados incorretamente", () => {
      PageTest.preencherFirstName();
      PageTest.preencherLastName();
      PageTest.preencherAddress();
      PageTest.preencherTelefone();
      PageTest.selecionarSexo();
      PageTest.selecionarHobiies();
      PageTest.clicarlinguagem();
      PageTest.selecionarlanguageincorreto();
      


})

Then ("clico em submit", () => {
     PageTest.salvarDados();
})

