export const waitForTextChange = (el, text, timeout) => {
    browser.waitUntil(
        function() {
            return el.getText() === text;
        }, 
        { timeout }
    );   

};

export const waitAndClick = async (el, timeout) => {
    await el.waitForDisplayed({ timeout });
    await el.click();

};

