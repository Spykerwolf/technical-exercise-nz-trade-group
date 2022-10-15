for (let x=0 ;x < 3;x++) { // runs test 3 times

// Test case 1: Search function test
describe("Search functionality", () => {
    it("The search query should be working as expected", async () => {
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.$('#search-input > #search').setValue("chelsea fc")
        await browser.pause(1000)
        await browser.$('#search-icon-legacy > yt-icon').click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=chelsea+fc")
    })
  })
}