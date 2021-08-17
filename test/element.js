describe("Should be able to assess the Volvo Campaign Page", () => {

    it("Accesss Volvo a-million-more page", () => {
        // Assert landing page
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const text = $('#IconCallouts-1');
        const langingPage = text.getText();

        const cookie = $("//button[@aria-label='Accept']");
        cookie.click();
    
    });

    it("Should be able to find Volvo V90 description page", () => {
        //Open "Our Car" on Volvo a-million-more page
        const ourCar = $("//span[text()='Our Cars']");
        ourCar.click();

        //Navigate to V90 Recharge description page
        const nav = $('//*[@id="site-nav-cars-menu-section-panel-1"]/div[5]/a/div/div/div[1]');
        nav.click();
        
        // Assert we are on V90 Recharge Description page
        const V90HeaderTitle = $('//*[@id="PdpSubmenu-1"]/div[2]/div/section/div[1]/div[1]/h1');
        expect(V90HeaderTitle).toHaveTextContaining("Volvo V90 Recharge");
 
     });
});
