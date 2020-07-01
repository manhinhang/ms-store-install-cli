import { PageObject, By2 } from "selenium-appium";
import {By, Key} from 'selenium-webdriver'

class FinishPage extends PageObject {
  isPageLoaded() {
    return this.launchButton.isDisplayed();
  }

  private get launchButton() { return By2.nativeName('Launch'); }

}

export default new FinishPage();