for (let x=0 ;x < 3;x++) { // runs test 3 times

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