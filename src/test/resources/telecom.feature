#Author: your.email@your.domain.com

Feature: Telecom valdation

  Scenario Outline: Addtariff module
    Given User in home page and click Addtariff
    When Fill the tariff fees "<MonRen>","<FreeLoc>","<FreeInt>","<FreeSms>","<Locmin>","<IntMin>","<SmsCharge>",
    And Submit the form
    Then Validate the outcomes
    Examples: 
      | MonRen  | FreeLoc | FreeInt  |FreeSms|Locmin|IntMin|SmsCharge|
     |499|100|100|100|200|200|200|
