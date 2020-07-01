import { PageObject, By2 } from "selenium-appium";
import {By, Key} from 'selenium-webdriver'

class AppPage extends PageObject {
  isPageLoaded() {
    return this.installButton.isDisplayed();
  }

  private get installButton() : By2 { return By2.nativeName('Install'); }

  installApp() {
    return this.installButton.click()
  }

}

export default new AppPage();