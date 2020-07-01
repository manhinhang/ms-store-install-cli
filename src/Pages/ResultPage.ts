import { PageObject, By2 } from "selenium-appium";
import {Key} from 'selenium-webdriver'

class ResultPage extends PageObject {
  private appName:string

  constructor(appName:string) {
    super()
    this.appName = appName
  }

  isPageLoaded() {
    return this.appButton.isDisplayed();
  }
  private get appButton() { return By2.nativeName(this.appName); }


  gotoAppPage() {
    return this.appButton.click()
  }
}

export default ResultPage;