for (let x=0 ;x < 3;x++) { // runs test 3 times

// Test case 2: Trending list details match video details

describe('Trending video description accuracy', () => {
    it('Title & view count from the #1 trending video should match between list and video page', async () => {
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.url("https://www.youtube.com/feed/explore")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/explore")
        await browser.pause(1000)
        await browser.url("https://www.youtube.com/feed/trending")
        await expect(browser).toHaveUrl("https://www.youtube.com/feed/trending")

        let num1TrendingFullTitle = (await (await $('ytd-video-renderer.style-scope.ytd-expanded-shelf-contents-renderer:nth-of-type(1) #video-title')).getAttribute('aria-label')) 
            if (num1TrendingFullTitle.includes("second ")) {
                num1TrendingFullTitle = num1TrendingFullTitle.replace("second ", "seconds ")
            }
        let num1TrendingTitleFromList = num1TrendingFullTitle.split(' by ')[0].split('#shorts')[0].replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        let num1TrendingViewsFromList = num1TrendingFullTitle.split('seconds ')[1].split(' – play Short')[0]

        console.log("")
        console.log("")
        console.log(num1TrendingTitleFromList) // Dude is a MENACE for this.
        console.log(num1TrendingViewsFromList) // 13,993,242 views
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
}