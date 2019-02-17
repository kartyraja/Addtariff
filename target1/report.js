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
  "duration": 14225271316,
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
  "duration": 55538733230,
  "status": "passed"
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
  "duration": 16333139589,
  "status": "passed"
});
formatter.match({
  "location": "AddTariffSteps.submit_the_form()"
});
formatter.result({
  "duration": 7496504284,
  "status": "passed"
});
formatter.match({
  "location": "ValidateSteps.validate_the_outcomes()"
});
formatter.result({
  "duration": 21756591,
  "status": "passed"
});
formatter.after({
  "duration": 750358315,
  "status": "passed"
});
});