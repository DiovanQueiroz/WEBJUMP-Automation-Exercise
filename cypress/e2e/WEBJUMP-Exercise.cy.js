describe('spec.cy.js', () => {
  beforeEach(() => {
    cy.visit('https://wj-qa-automation-test.github.io/qa-test/');
    cy.iframe('#iframe_panel_body > iframe').as('iframe')
  });
  it('Buttons should dissapear on click', () => {

    cy.get('#btn_one').click().should('not.be.visible')
    cy.get('#btn_two').click().should('not.be.visible')
    cy.get('#btn_link').click().should('not.be.visible')
  });

  it('Buttons inside of the iframe should dissapear on click', () => {
    
    cy.get('@iframe').find('#btn_one').click().should('not.be.visible')
    cy.get('@iframe').find('#btn_two').click().should('not.be.visible')
    cy.get('@iframe').find('#btn_link').click().should('not.be.visible')
  });

  it('Last scenario', () => {

    cy.get('#first_name').type('Diovan Cristian de Queiroz')
    cy.get('#btn_one').click().should('not.be.visible')
    cy.get('#opt_three').check().should('be.checked');
    cy.get('#select_box').select('option_two').should('have.value', 'option_two');
    cy.get('[alt="selenium"]').should('have.attr', 'src','https://i.imgur.com/1vsaEJB.jpg').and('be.visible')
  });
  });





















/*Levando em consideração a página que foi especificada:
1) Crie um cenário onde clicamos nos botões "One", "Two, e "Four", depois verifique a ausência dos mesmos.

2) Dentro da mesma página, clique nos botões "One", "Two" e "Four" que encontram-se dentro do painel 
"IFRAME BUTTONS" e valide a não-presença dos mesmos.

3) No cenário final, iremos preencher o campo "YourFirstName" com um texto qualquer. 
Clique no botão "One", cheque a opção "OptionThree", selecione a opção "ExampleTwo" dentro 
da select box, e valide a presença da imagem do logo do "Selenium Webdriver".

4) Documente as versões das ferramentas utilizadas (O.S, Ruby, Firefox, Geckodriver, Chromedriver, etc.)
 e crie um step-by-step informando como configurar e utilizar esse ambiente, levando em conta a possibilidade de alguma 
 pessoa iniciante dar continuidade em um projeto feito por você. */
