describe('login test', () => {
    it('should validate page title', async () => {
        await browser.url("https://the-internet.herokuapp.com/login");
        expect(await browser.getTitle()).toEqual("The Internet")

        const user = $("#username")
        const password = $("#password")
        const submitBtn = $("//*[@id='login']/button")
        const flash = $("#flash")

        await (await user).setValue('tomsmith')
        await (await password).setValue('SuperSecretPassword!')
        await (await submitBtn).click()

        await expect(flash).toHaveTextContaining('You logged into a secure area!')
    })
})