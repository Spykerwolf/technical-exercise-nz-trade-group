describe("Youtube search", () => {
  it("tests Youtube search", async () => {
    await browser.setWindowSize(2544, 717)
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$("#search").click()
    await browser.$("#search").setValue("chelsea fc")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
  });
});
