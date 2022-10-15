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





        // Dude is a MENACE for this. 💀😭 #shorts by House of Highlights 7 days ago 22 seconds 11,681,945 views – play Short
        let num1TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('aria-label')) 
        let num1TrendingTitleFromList = num1TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num1TrendingViewsFromList = num1TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0] //// 11,673,658 views


        console.log("")
        console.log("")
        console.log("")
        console.log("")
        console.log(num1TrendingTitleFromList) // Dude is a MENACE for this. 💀😭 #shorts by House of Highlights 7 | Dude is a MENACE for this. 💀😭 #shorts | 
        console.log(num1TrendingViewsFromList) // 11,673,658 views
        console.log("")
        console.log("")
        console.log("")
        console.log("")




        // Extreme $1,000,000 Minecraft Challenge! by MrBeast Gaming 2 days ago 10 minutes, 43 seconds 4,327,451 views
        let num2TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(2) #video-title')).getAttribute('aria-label'))
        let num2TrendingTitleFromList = num2TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num2TrendingViewsFromList = num2TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0]


        console.log("")
        console.log("")
        console.log("")
        console.log("")
        console.log(num2TrendingTitleFromList) // Extreme $1,000,000 Minecraft Challenge!
        console.log(num2TrendingViewsFromList) // 4,331,287 views
        console.log("")
        console.log("")
        console.log("")
        console.log("")


        //Impossible 0.00001% Odds! by Beast Reacts 3 days ago 8 minutes, 1 second 6,587,381 views
        let num3TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(3) #video-title')).getAttribute('aria-label'))
        let num3TrendingTitleFromList = num3TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num3TrendingViewsFromList = num3TrendingFullTitle.replace("second","seconds").split('seconds ')[1].split(' – play Short')[0]

        console.log(num3TrendingFullTitle)
        console.log("")
        console.log("")
        console.log("")
        console.log(num3TrendingTitleFromList)
        console.log(num3TrendingViewsFromList)
        console.log("")
        console.log("")
        console.log("")
        console.log("")
        

//         const num1TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('href'))
//         const num1TrendingURLFixed = ("https://www.youtube.com" + num1TrendingURL.replace('shorts/','watch?v='))

//         await browser.url(num1TrendingURLFixed)
//         await expect(browser).toHaveUrl(num1TrendingURLFixed)

//         const num1TrendingFullTitleOnVideoPage = (await browser.getTitle())
//         const num1TrendingViewsOnVideoPage = (await (await $("#count > ytd-video-view-count-renderer > span.view-count.style-scope.ytd-video-view-count-renderer")).getText())

//         console.log("The number 1 trending video is:")
//         console.log("From video list: " + num1TrendingFullTitle + " " + num1TrendingURLFixed)
//         console.log("From actual video: " + num1TrendingFullTitleOnVideoPage + " " + num1TrendingViewsOnVideoPage)
//         console.log("")
//         console.log("")

//         // await expect(num1TrendingFullTitle).toHaveTextContaining(num1TrendingFullTitleOnVideoPage)
//         // await expect (num1TrendingFullTitle).toHaveTextContaining(num1TrendingViewsOnVideoPage)
    });
})
// }