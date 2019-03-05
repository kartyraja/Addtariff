$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workspace/telecom/src/test/resources/telecom.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 3,
  "name": "Telecom valdation",
  "description": "",
  "id": "telecom-valdation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Addtariff module",
  "description": "",
  "id": "telecom-valdation;addtariff-module",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User in home page and click Addtariff",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Fill the tariff fees \"\u003cMonRen\u003e\",\"\u003cFreeLoc\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSms\u003e\",\"\u003cLocmin\u003e\",\"\u003cIntMin\u003e\",\"\u003cSmsCharge\u003e\",",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate the outcomes",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "telecom-valdation;addtariff-module;",
  "rows": [
    {
      "cells": [
        "MonRen",
        "FreeLoc",
        "FreeInt",
        "FreeSms",
        "Locmin",
        "IntMin",
        "SmsCharge"
      ],
      "line": 11,
      "id": "telecom-valdation;addtariff-module;;1"
    },
    {
      "cells": [
        "499",
        "100",
        "100",
        "100",
        "200",
        "200",
        "200"
      ],
      "line": 12,
      "id": "telecom-valdation;addtariff-module;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48706416134,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Addtariff module",
  "description": "",
  "id": "telecom-valdation;addtariff-module;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User in home page and click Addtariff",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Fill the tariff fees \"499\",\"100\",\"100\",\"100\",\"200\",\"200\",\"200\",",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.user_in_home_page_and_click_Addtariff()"
});
formatter.result({
  "duration": 18330285212,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"one\"]/div/div[3]/div[1]/h3/a\"}\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.1.7600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027KARTYRAJA-PC\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\KARTYR~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53993}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: 96a6d33b1803cc3c8891dd7fa1c448e3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"one\"]/div/div[3]/div[1]/h3/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepdefinition.HomepageSteps.user_in_home_page_and_click_Addtariff(HomepageSteps.java:13)\r\n\tat ✽.Given User in home page and click Addtariff(D:/workspace/telecom/src/test/resources/telecom.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "499",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 28
    },
    {
      "val": "100",
      "offset": 34
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "200",
      "offset": 46
    },
    {
      "val": "200",
      "offset": 52
    },
    {
      "val": "200",
      "offset": 58
    }
  ],
  "location": "AddTariffSteps.fill_the_tariff_fees(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddTariffSteps.submit_the_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ValidateSteps.validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004490235,
  "status": "passed"
});
});