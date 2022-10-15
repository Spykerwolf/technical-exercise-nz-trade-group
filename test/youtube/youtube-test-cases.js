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

describe("Trending list details match video details", () => {
    it("Trending list details match video details", async () => {
        const youtube = ("https://www.youtube.com")
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.url("https://www.youtube.com/feed/explore")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/explore")
        await browser.url("https://www.youtube.com/feed/trending")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/trending")

        const num1TrendingTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getText())

        const num2TrendingTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(2) #video-title')).getText())

        const num3TrendingTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(3) #video-title')).getText())

        const num1TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('href'))

        const num2TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(2) #video-title')).getAttribute('href'))

        const num3TrendingURL = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(3) #video-title')).getAttribute('href'))

        console.log("The number 1 trending video is:")
        console.log(num1TrendingTitle)
        console.log(youtube + num1TrendingURL.replace('shorts','watch'))
        console.log("")
        console.log("")
        console.log("The number 2 trending video is:")
        console.log(num2TrendingTitle)
        console.log(youtube + num2TrendingURL.replace('shorts','watch'))
        console.log("")
        console.log("")
        console.log("The number 3 trending video is:")
        console.log(num3TrendingTitle)
        console.log(youtube + num3TrendingURL.replace('shorts','watch'))
        console.log("")
        console.log("")



    // await expect(browser).toHaveUrl("https://www.realwebsite.com/")
    // await browser.$("#img").click()
    // await browser.$("#email").doubleClick()
    // await browser.$("#header > ytd-active-account-header-renderer").click()
    });
});



// describe("Scrapes data from Youtube", () => {
//     it("should get the correct data from Amazon", async () => {
//     await browser.url("https://www.youtube.com/watch?v=KjbSmGuCom8")
//     await expect(browser).toHaveUrl("https://www.youtube.com/watch?v=KjbSmGuCom8")

//     const elem = await $('#snippet #formatted-snippet-text span')
//     console.log(await elem.getText());




//     });
// });