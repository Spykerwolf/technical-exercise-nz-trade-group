describe("Search function returns correct results", () => {
    it("The search query and list item should be related", async () => {
        
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        
        await (await browser.$('#search-input').moveTo())
        await (await browser.$('#search.ytd-searchbox')).setValue("chelsea fc")
        await (await browser.$('#search-icon-legacy > yt-icon').click())

        await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=chelsea+fc")
    });
  });