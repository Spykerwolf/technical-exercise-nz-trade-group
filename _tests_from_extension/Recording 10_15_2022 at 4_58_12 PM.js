describe("Recording 10/15/2022 at 4:58:12 PM", () => {
  it("tests Recording 10/15/2022 at 4:58:12 PM", async () => {
    await browser.setWindowSize(2543, 827)
    await browser.url("https://www.youtube.com/watch?v=KjbSmGuCom8")
    await expect(browser).toHaveUrl("https://www.youtube.com/watch?v=KjbSmGuCom8")
    await browser.$("#formatted-snippet-text > span:nth-child(1)").doubleClick()
  });
});
