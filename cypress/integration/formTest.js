describe("Test form inputs", () => {
    before(()=>{
        cy.visit("localhost:3000/pizza");
    });
    it("Input name into the name field", () =>{
        cy.get('input[name="name"]')
            .type("Vaidehee Patel")
            .should("have.value","Vaidehee Patel");
            cy.get('[data-cy="sizeSelect"]').select('Medium')
    })
    it("Testing check boxes", () =>{
        cy.get('input[name="glutenFreeCrust"]')
        .check()
        .should("be.checked");
        cy.get('input[name="pepperoni"]')
            .check()
            .should("be.checked");
        cy.get('input[name="onions"]')
            .check()
            .should("be.checked");
        cy.get('input[name="sausage"]')
            .check()
            .should('be.checked');
        cy.get('input[name="pineapple"]')
            .check()
            .should('be.checked');
        cy.get('input[name="canadianBacon"]')
            .check()
            .should("be.checked");
        cy.get('input[name="spicyItalianSausage"]')
            .check()
            .should("be.checked");
        cy.get('input[name="grilledChicken"]')
            .check()
            .should('be.checked');
        cy.get('input[name="greenPeppers"]')
            .check()
            .should('be.checked');
            cy.get('input[name="pepperoni"]')
            .check()
            .should("be.checked");
        cy.get('input[name="dicedTomatos"]')
            .check()
            .should("be.checked");
        cy.get('input[name="blackOlives"]')
            .check()
            .should('be.checked');
        cy.get('input[name="roastedGarlic"]')
            .check()
            .should('be.checked');
        cy.get('input[name="artichokeHearts"]')
            .check()
            .should('be.checked');
        cy.get('input[name="threeCheese"]')
            .check()
            .should('be.checked');
        cy.get('input[name="extraCheese"]')
            .check()
            .should('be.checked');
    });
    it("Testing special instructions", () => {
        cy.get('textarea[name="instructions"]')
            .type("This is a test for special instructions")
            .should('have.value',"This is a test for special instructions");
    });

    it("test submit button on form", () => {
        cy.get('form').submit();
    })
})