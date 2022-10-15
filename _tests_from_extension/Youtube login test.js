describe("Youtube login test", () => {
  it("tests Youtube login test", async () => {
    await browser.setWindowSize(2544, 603)
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$("#text").click()
    await expect(browser).toHaveUrl("https://accounts.google.com/v3/signin/identifier?dsh=S-838258599%3A1665783862545300&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ec=65620&hl=en&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWp8qegR8qq8wWzAI9M3tzx8mHsAAceZUk4Y9KXoFI0PsjwaGeZmmp_pg7LHSXBIhSqrAz9dNw")
    await browser.$("#identifierId").setValue("crashbandicoottest")
    await browser.$("#identifierNext > div > button > span").click()
    await browser.$("aria/Enter your password").setValue("supersecretpassword123")
    await browser.$("#passwordNext > div > button > span").click()
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$("#img").click()
    await browser.$("#email").doubleClick()
    await browser.$("#header > ytd-active-account-header-renderer").click()
  });
});
