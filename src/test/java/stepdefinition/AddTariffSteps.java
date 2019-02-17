package stepdefinition;

import cucumber.api.java.en.When;
import objectrepository.AddTariffObject;

public class AddTariffSteps {
	@When("^Fill the tariff fees \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",$")
	public void fill_the_tariff_fees(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
		AddTariffObject tarrif=new AddTariffObject();
		tarrif.getRent().sendKeys(arg1);
		tarrif.getLoc_min().sendKeys(arg2);
		tarrif.getInter_min().sendKeys(arg3);
		tarrif.getSms().sendKeys(arg4);
		tarrif.getMin_char().sendKeys(arg5);
		tarrif.getInt_char().sendKeys(arg6);
		tarrif.getSms_char().sendKeys(arg7);
		
	}

	@When("^Submit the form$")
	public void submit_the_form() throws Throwable {
		AddTariffObject tarrif=new AddTariffObject();
tarrif.getSub().click();
		
	}

}
