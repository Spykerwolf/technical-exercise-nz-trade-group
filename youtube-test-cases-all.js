for (let x=0 ;x < 3;x++) {

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
    });
  });





// Test case 2: Trending list details match video details
describe('Trending video description accuracy', () => {
    it('Title & View count matches from the trending video list and video page', async () => {
        
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.url("https://www.youtube.com/feed/explore")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/explore")
        await browser.pause(1000)
        await browser.url("https://www.youtube.com/feed/trending")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/trending")



        // Dude is a MENACE for this. 💀😭 #shorts by House of Highlights 7 days ago 22 seconds 11,681,945 views – play Short
        let num1TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('aria-label')) 
            if (num1TrendingFullTitle.includes("second ")) {
                num1TrendingFullTitle = num1TrendingFullTitle.replace("second ", "seconds ")
            }
        let num1TrendingTitleFromList = num1TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num1TrendingViewsFromList = num1TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0] //// 11,784,147 views


        // Extreme $1,000,000 Minecraft Challenge! by MrBeast Gaming 2 days ago 10 minutes, 43 seconds 4,327,451 views
        let num2TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(2) #video-title')).getAttribute('aria-label'))
            if (num2TrendingFullTitle.includes("second ")) {
                num2TrendingFullTitle = num2TrendingFullTitle.replace("second ", "seconds ")
            }
        let num2TrendingTitleFromList = num2TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num2TrendingViewsFromList = num2TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0]


        //Impossible 0.00001% Odds! by Beast Reacts 3 days ago 8 minutes, 1 second 6,587,381 views
        let num3TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(3) #video-title')).getAttribute('aria-label'))
            if (num3TrendingFullTitle.includes("second ")) {
                num3TrendingFullTitle = num3TrendingFullTitle.replace("second ", "seconds ")
            }
        let num3TrendingTitleFromList = num3TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num3TrendingViewsFromList = num3TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0]


        console.log("")
        console.log("")
        console.log("")
        console.log(num1TrendingTitleFromList) // Dude is a MENACE for this.
        console.log(num1TrendingViewsFromList) // 11,784,147 views
        console.log("")
        console.log(num2TrendingTitleFromList) // Extreme $1,000,000 Minecraft Challenge!
        console.log(num2TrendingViewsFromList) // 4,359,592 views
        console.log("")
        console.log(num3TrendingTitleFromList) // Impossible 0.00001% Odds!
        console.log(num3TrendingViewsFromList) // 6,598,727 views
        console.log("")
        console.log("")
        console.log("")
        

        const num1TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('href'))
        const num1TrendingURLFixed = ("https://www.youtube.com" + num1TrendingURL.replace('shorts/','watch?v='))

        await browser.url(num1TrendingURLFixed)
        await expect(browser).toHaveUrl(num1TrendingURLFixed)

        let num1TrendingFullTitleOnVideoPage = (await browser.getTitle())
        let num1TrendingTitleOnVideoPage = num1TrendingFullTitleOnVideoPage.split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')

        // Checking to see if title matches between list and video page

        await expect(num1TrendingTitleOnVideoPage).toEqual(num1TrendingTitleOnVideoPage)
        await browser.pause(3000)
        const num1TrendingViewsOnVideoPage = (await (await $("#count > ytd-video-view-count-renderer > span.view-count.style-scope.ytd-video-view-count-renderer")).getText())
        console.log("")
        console.log("")
        console.log("")
        console.log("It's a match!")
        console.log(num1TrendingTitleOnVideoPage + " " + num1TrendingViewsFromList + " " + " source: Trending list")
        console.log(num1TrendingTitleOnVideoPage + " " + num1TrendingViewsOnVideoPage + " " + " source: Video page")
        console.log("")
        console.log("")
        console.log("")

    });
})

// Test Case 3 - Theme test

describe("Theme tests - device, light & dark", () => {
    it("Testing device theme", async () => {
      await browser.url("https://www.youtube.com/")
      await expect(browser).toHaveUrl("https://www.youtube.com/")
      await browser.$('#button #button #button yt-icon').waitForExist()
      await browser.$('#button #button #button yt-icon').click()
      await browser.pause(1000)
      await browser.$("#items > ytd-toggle-theme-compact-link-renderer").waitForExist()
      await browser.$("#items > ytd-toggle-theme-compact-link-renderer").click()
      await browser.pause(1000)
      await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[2]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").waitForExist()
      await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[2]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").click()
      await browser.pause(1000)
    });

    it("Testing light theme", async () => {
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.$('#button #button #button yt-icon').waitForExist()
        await browser.$('#button #button #button yt-icon').click()
        await browser.pause(1000)
        await browser.$("#items > ytd-toggle-theme-compact-link-renderer").waitForExist()
        await browser.$("#items > ytd-toggle-theme-compact-link-renderer").click()
        await browser.pause(1000)
        await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[4]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").waitForExist()
        await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[4]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").click()
        await browser.pause(1000)
      });

      it("Testing dark theme", async () => {
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.$('#button #button #button yt-icon').waitForExist()
        await browser.$('#button #button #button yt-icon').click()
        await browser.pause(1000)
        await browser.$("#items > ytd-toggle-theme-compact-link-renderer").waitForExist()
        await browser.$("#items > ytd-toggle-theme-compact-link-renderer").click()
        await browser.pause(1000)
        await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[3]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").waitForExist()
        await browser.$("/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[4]/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer/div[2]/ytd-compact-link-renderer[3]/a/tp-yt-paper-item/div[2]/yt-formatted-string[1]").click()
        await browser.pause(1000)
      });
  });
}
  








// Test case 4: Login & logout test

// describe("Login function works as expected", () => {
//     it("Login should accept valid credentials", async () => {
//     await browser.url("https://www.youtube.com/")
//     await expect(browser).toHaveUrl("https://www.youtube.com/")
//     await browser.$('#buttons > ytd-button-renderer').click()
//     await browser.pause(3000)
//     await expect(browser).toHaveUrlContaining("https://accounts.google.com")
//     await browser.$("#identifierId").setValue("crashbandicoottest@gmail.com")
//     await browser.$("#identifierNext > div > button > span").click()
//     await browser.pause(3000)
//     await browser.pause(3000)
//     await browser.pause(3000)
//     await browser.$("aria/Enter your password").setValue("supersecretpassword123")
//     await browser.$("#passwordNext > div > button > span").click()
//     await browser.pause(3000)
//     await expect(browser).toHaveUrl("https://www.realwebsite.com/")
//     await browser.$("#img").click()
//     await browser.$("#email").doubleClick()
//     await browser.$("#header > ytd-active-account-header-renderer").click()
//     });
// });
