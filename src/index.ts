#!/usr/bin/env node

import { driver, windowsAppDriverCapabilities } from 'selenium-appium'

import AppPage from './Pages/AppPage';
import FinishPage from './Pages/FinishPage';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';

export async function main() {
  try {
    // console.log(process.argv);
    let appName = process.argv[2]
    const appId = 'Microsoft.WindowsStore_8wekyb3d8bbwe!App'
    const capabilites = windowsAppDriverCapabilities(appId);
    await driver.startWithCapabilities(capabilites)
    await HomePage.waitForPageLoaded()
    await HomePage.openSearch();
    await HomePage.searchApp(appName);
    let resultPage = new ResultPage(appName)
    await resultPage.waitForPageLoaded()
    await resultPage.gotoAppPage()
    await AppPage.waitForPageLoaded()
    await AppPage.installApp()
    await FinishPage.waitForPageLoaded()

  } catch (e) {
    // Deal with the fact the chain failed
  } finally {
    await driver.quit()
  }
}

main()
