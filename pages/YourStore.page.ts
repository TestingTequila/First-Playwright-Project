export class YourStore{

    page: any;
    constructor(page:any ){
       this.page = page;
    }

    async clickOnMyAccountIcon(){
    const myAccountIcon =this.page.locator("//i[@class='fa fa-user']");
    await myAccountIcon.click();
    await this.page.locator("//a[text()='Login']").waitFor({state:"attached", timeout:5000});
    }

    async clickOnLoginLink(){
    const loginLink =this.page.locator("//a[text()='Login']");
    await loginLink.click();
    }
}