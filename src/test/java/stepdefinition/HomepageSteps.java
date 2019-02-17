package stepdefinition;

import cucumber.api.java.en.Given;
import objectrepository.HomepageObject;

public class HomepageSteps {
	
	@Given("^User in home page and click Addtariff$")
	public void user_in_home_page_and_click_Addtariff() throws Throwable {
	hook.driver.get("https://demo.guru99.com/telecom/");
		HomepageObject home=new HomepageObject();
		
		home.getAddtariffclick().click();
	}
		}

