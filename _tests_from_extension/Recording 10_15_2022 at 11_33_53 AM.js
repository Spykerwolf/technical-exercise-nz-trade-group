describe("Recording 10/15/2022 at 11:33:53 AM", () => {
  it("tests Recording 10/15/2022 at 11:33:53 AM", async () => {
    await browser.setWindowSize(2544, 603)
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$("ytd-guide-entry-renderer [href='/feed/explore']").click()
    await expect(browser).toHaveUrl("https://www.youtube.com/feed/explore")
    await browser.$("[href='/feed/trending?bp=6gQJRkVleHBsb3Jl']").click()
    await expect(browser).toHaveUrlContaining("https://www.youtube.com/feed/trending")
  });
});
