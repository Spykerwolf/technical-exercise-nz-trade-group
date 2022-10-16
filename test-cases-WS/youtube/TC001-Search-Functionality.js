for (let x=0 ;x < 3;x++) { // runs test 3 times

// Test case 1: Search function test

describe("Search query functionality", () => {
  it("Search query - placeholder text correct", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    const placeHolderText = await (await browser.$('#search-input > #search')).getAttribute('placeholder')
    await expect(placeHolderText).toEqual("Search")
  })

  it("Search query - letters", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$('#search-input > #search').setValue("chelsea fc")
    await browser.pause(1000)
    await browser.$('#search-icon-legacy > yt-icon').click()
    await browser.pause(3000)
    await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=chelsea+fc")
  })

  it("Search query - numbers", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$('#search-input > #search').setValue("456489165654984654")
    await browser.pause(1000)
    await browser.$('#search-icon-legacy > yt-icon').click()
    await browser.pause(3000)
    await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=456489165654984654")
  })

  it("Search query - blank", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$('#search-input > #search').setValue("")
    await browser.pause(1000)
    await browser.$('#search-icon-legacy > yt-icon').click()
    await browser.pause(3000)
    await expect(browser).toHaveUrl("https://www.youtube.com/")
  })

  it("Search query - url", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$('#search-input > #search').setValue("https://www.youtube.com")
    await browser.pause(1000)
    await browser.$('#search-icon-legacy > yt-icon').click()
    await browser.pause(3000)
    await expect(browser).toHaveUrlContaining("https://www.youtube.com/")
  })

  it("Search query - email address", async () => {
    await browser.url("https://www.youtube.com/")
    await expect(browser).toHaveUrl("https://www.youtube.com/")
    await browser.$('#search-input > #search').setValue("random@gmail.com")
    await browser.pause(1000)
    await browser.$('#search-icon-legacy > yt-icon').click()
    await browser.pause(3000)
    await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=random%40gmail.com")
  })
})
}