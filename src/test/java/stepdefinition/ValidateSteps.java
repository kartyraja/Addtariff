package stepdefinition;

import cucumber.api.java.en.Then;
import junit.framework.Assert;
import objectrepository.ValidationObject;

public class ValidateSteps {

	
	@Then("^Validate the outcomes$")
	public void validate_the_outcomes() throws Throwable {

		ValidationObject access = new ValidationObject();
		Assert.assertTrue("Congratulation you add Tariff Plan", access.getConf_Message().isDisplayed());
	//access.getConf_Message();
	}
}
