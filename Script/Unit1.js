function Test1()
{
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(952, 18);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://blazedemo.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageBlazedemoCom.Wait();
  //Selects the 'Boston' item of the 'selectFromport' combo box.
  Aliases.browser.pageBlazedemoCom.selectFromport.ClickItem("Boston");
  //Selects the 'New York' item of the 'selectToport' combo box.
  Aliases.browser.pageBlazedemoCom.selectToport.ClickItem("New York");
  //Clicks the 'submitbuttonFindFlights' button.
  Aliases.browser.pageBlazedemoCom.submitbuttonFindFlights.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageReserve.Wait();
  //Clicks the 'submitbuttonChooseThisFlight' button.
  Aliases.browser.pageReserve.submitbuttonChooseThisFlight.ClickButton();
  Project.Variables.datadriven.Reset();
  for(; !Project.Variables.datadriven.IsEOF();)
  {
    //Clicks the 'textboxName' control.
    Aliases.browser.pagePurchase.textboxName.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("firstname") in the 'textboxName' text editor.
    Aliases.browser.pagePurchase.textboxName.SetText(Project.Variables.datadriven.Value("firstname"));
    //Clicks the 'textboxAddress' control.
    Aliases.browser.pagePurchase.textboxAddress.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("address") in the 'textboxAddress' text editor.
    Aliases.browser.pagePurchase.textboxAddress.SetText(Project.Variables.datadriven.Value("address"));
    //Clicks the 'textboxCity' control.
    Aliases.browser.pagePurchase.textboxCity.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("city") in the 'textboxCity' text editor.
    Aliases.browser.pagePurchase.textboxCity.SetText(Project.Variables.datadriven.Value("city"));
    //Clicks the 'textboxState' control.
    Aliases.browser.pagePurchase.textboxState.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("state") in the 'textboxState' text editor.
    Aliases.browser.pagePurchase.textboxState.SetText(Project.Variables.datadriven.Value("state"));
    //Clicks the 'textboxZipCode' control.
    Aliases.browser.pagePurchase.textboxZipCode.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("pin_code") in the 'textboxZipCode' text editor.
    Aliases.browser.pagePurchase.textboxZipCode.SetText(Project.Variables.datadriven.Value("pin_code"));
    //Clicks the 'textboxCreditCardNumber' control.
    Aliases.browser.pagePurchase.textboxCreditCardNumber.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("Card_no") in the 'textboxCreditCardNumber' text editor.
    Aliases.browser.pagePurchase.textboxCreditCardNumber.SetText(Project.Variables.datadriven.Value("Card_no"));
    //Clicks the 'textboxYear' control.
    Aliases.browser.pagePurchase.textboxYear.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("year") in the 'textboxYear' text editor.
    Aliases.browser.pagePurchase.textboxYear.SetText(Project.Variables.datadriven.Value("year"));
    //Clicks the 'textboxNameOnCard' control.
    Aliases.browser.pagePurchase.textboxNameOnCard.Click();
    //Sets the text KeywordTests.Test1.Variables.datadriven("nameon_card") in the 'textboxNameOnCard' text editor.
    Aliases.browser.pagePurchase.textboxNameOnCard.SetText(Project.Variables.datadriven.Value("nameon_card"));
    //Clicks the 'submitbuttonPurchaseFlight' button.
    Aliases.browser.pagePurchase.submitbuttonPurchaseFlight.ClickButton();
    Project.Variables.datadriven.Next();
  }
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pagePurchase.Wait();
}