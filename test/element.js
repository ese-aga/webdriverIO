describe("Should be able to access the Volvo campaign page", function() {
    it("Accesss Volvo a-million-more page", function() {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const search = $('#IconCallouts-1');
        const text = search.getText();

        const cookie = $("//button[@aria-label='Accept']");
        cookie.click();
    
    });

    it("Find Volvo XC90 description page", function() {
       const ourCar = $("//span[text()='Our Cars']");
       ourCar.click();
        
       const nav = $("._SiteNav-mw [href='/intl/v/cars/v90-hybrid'] > ._SiteNav-ag > ._SiteNav-ag");
       nav.click();

       const xc90HeaderTitle = $("[data-autoid='pdpsubmenu:nav-desktop']");
       expect(xc90HeaderTitle).toBeDisplayed();

    });
});

