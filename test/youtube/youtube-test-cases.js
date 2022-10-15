//Test case 1: Search function test

// describe("Search function returns correct results", () => {
//     it("The search query and list item should be related", async () => {
        
//         await browser.url("https://www.youtube.com/")
//         await expect(browser).toHaveUrl("https://www.youtube.com/")
        
//         await browser.$('#search-input > #search').setValue("chelsea fc")
//         await browser.$('#search-icon-legacy > yt-icon').click()

//         await expect(browser).toHaveUrl("https://www.youtube.com/results?search_query=chelsea+fc")
//     });
//   });


// Test case 2: Login & logout test

// describe("Login function works as expected", () => {
//     it("Login should accept valid credentials", async () => {
//     await browser.url("https://www.youtube.com/")
//     await expect(browser).toHaveUrl("https://www.youtube.com/")
//     await browser.$('#buttons > ytd-button-renderer').click()
//     await expect(browser).toHaveUrlContaining("https://accounts.google.com")
//     await browser.$("#identifierId").setValue("bandicoothunter9000@gmail.com")
//     await browser.$("#identifierNext > div > button > span").click()
//     await browser.pause(3000)
//     await browser.$("aria/Enter your password").setValue("WolfSpike$$$")
//     await browser.$("#passwordNext > div > button > span").click()
//     await expect(browser).toHaveUrl("https://www.realwebsite.com/")
//     await browser.$("#img").click()
//     await browser.$("#email").doubleClick()
//     await browser.$("#header > ytd-active-account-header-renderer").click()
//     });
// });

// Test case 3: Trending list details match video details


// for (let x=0 ;x < 5;x++) {
describe('Trending list details match video details', () => {
    it('Browse to trend page, scrape #1 video from trending videos list & convert shorts URL to standard watch url', async () => {
        
        await browser.setWindowSize(1920, 1080)
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.url("https://www.youtube.com/feed/explore")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/explore")
        await browser.url("https://www.youtube.com/feed/trending")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/trending")

        const num1TrendingTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('aria-label'))
        console.log(num1TrendingTitle) //Dude is a MENACE for this. 💀😭 #shorts by House of Highlights 7 days ago 22 seconds 11,529,443 views – play Short
        

        const num1TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('href'))
        const num1TrendingURLFixed = ("https://www.youtube.com" + num1TrendingURL.replace('shorts/','watch?v='))

        await browser.url(num1TrendingURLFixed)
        await expect(browser).toHaveUrl(num1TrendingURLFixed)

        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
          );

        const num1TrendingTitleOnVideoPage = (await browser.getTitle())
        const num1TrendingViewsOnVideoPage = (await (await $("#count > ytd-video-view-count-renderer > span.view-count.style-scope.ytd-video-view-count-renderer")).getText())

        console.log("The number 1 trending video is:")
        console.log("From video list: " + num1TrendingTitle + " " + num1TrendingURLFixed)
        console.log("From actual video: " + num1TrendingTitleOnVideoPage + " " + num1TrendingViewsOnVideoPage)
        console.log("")
        console.log("")

        // await expect(num1TrendingTitle).toHaveTextContaining(num1TrendingTitleOnVideoPage)
        // await expect (num1TrendingTitle).toHaveTextContaining(num1TrendingViewsOnVideoPage)
    });
})
// }