for (let x=0 ;x < 3;x++) { // runs test 3 times

// Test case 4: Video functionality tests

describe("Video functionality tests", () => {
    it("Pause/resume video by left clicking on it", async () => {
      const adsElement = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div[2]/div/div/ytd-player/div/div/div[4]/div/div[3]/div/div[2]/span"
      await browser.url("https://www.youtube.com/")
      await expect(browser).toHaveUrl("https://www.youtube.com/")
      await browser.url("https://www.youtube.com/watch?v=eCs8LT290a4")
      await expect(browser).toHaveUrlContaining("https://www.youtube.com/watch?v=eCs8LT290a4")
      await browser.pause(1500)
      await browser.keys('k')

      if (await driver.$(adsElement).isExisting()) {
        await browser.$(adsElement).waitForClickable()
        await browser.$(adsElement).click()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(3000)

      } else {
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").click()
        await browser.pause(3000)
      }
    });

    it("Adjust volume and go full screen", async () => {
      const adsElement = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div[2]/div/div/ytd-player/div/div/div[4]/div/div[3]/div/div[2]/span"
      await browser.url("https://www.youtube.com/")
      await expect(browser).toHaveUrl("https://www.youtube.com/")
      await browser.url("https://www.youtube.com/watch?v=eCs8LT290a4")
      await expect(browser).toHaveUrlContaining("https://www.youtube.com/watch?v=eCs8LT290a4")
      await browser.pause(1500)
      await browser.keys('k')

      if (await driver.$(adsElement).isExisting()) {
        await browser.$(adsElement).waitForClickable()
        await browser.$(adsElement).click()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(3000)
        
      } else {
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(2000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(1000)
        await browser.$("#movie_player > div.html5-video-container > video").doubleClick()
        await browser.pause(3000)
      }
    })

      it("Muting & captioning test", async () => {
        const adsElement = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div[2]/div/div/ytd-player/div/div/div[4]/div/div[3]/div/div[2]/span"
        await browser.url("https://www.youtube.com/")
        await expect(browser).toHaveUrl("https://www.youtube.com/")
        await browser.url("https://www.youtube.com/watch?v=eCs8LT290a4")
        await expect(browser).toHaveUrlContaining("https://www.youtube.com/watch?v=eCs8LT290a4")
        await browser.pause(1500)
        await browser.keys('k')
  
        if (await driver.$(adsElement).isExisting()) {
          await browser.$(adsElement).waitForClickable()
          await browser.$(adsElement).click()
          await browser.pause(2000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > span > button").click()
          await browser.pause(2000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > span > button").click()
          await browser.pause(1000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-subtitles-button.ytp-button").click()
          await browser.pause(1000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-subtitles-button.ytp-button").click()
          await browser.pause(3000)
          
        } else {
          await browser.pause(2000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > span > button").click()
          await browser.pause(2000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > span > button").click()
          await browser.pause(1000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-subtitles-button.ytp-button").click()
          await browser.pause(1000)
          await browser.$("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-subtitles-button.ytp-button").click()
          await browser.pause(3000)
        }
    });
  })
}