describe("Should be able to interaction with web element", () => {
    it("get header value", () => {

        //Select Campaign Heading "Ideas that change the world are often the most controversial."
        
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const header = $('#ModelIntro-1');
        const text = header.getText();
        console.log(text);
    });
});
