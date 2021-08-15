describe("interaction with web element", function() {
    it("get header value", function() {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const header = $('#ModelIntro-1');
        let text = header.getText();
        console.log(text);
    });
});

