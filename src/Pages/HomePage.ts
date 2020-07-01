import { PageObject, By2 } from "selenium-appium";
import {Key} from 'selenium-webdriver'

class HomePage extends PageObject {
  isPageLoaded() {
    return this.searchButton.isDisplayed();
  }
  private get searchButton() { return By2.nativeName('Search button'); }
  private get searchText() { return By2.nativeName('Search'); }

  openSearch() {
    return this.searchButton.click();
  }

  searchApp(appName:string) {
    let a =  this.driver.findElement(this.searchText)
    return a.sendKeys(appName + Key.ENTER)
  }
}

export default new HomePage();