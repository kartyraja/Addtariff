package objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepdefinition.hook;

public class HomepageObject {
	
	public HomepageObject() {

	PageFactory.initElements(hook.driver, this);	
	
	}
	
	@FindBy(xpath= "//*[@id=\"one\"]/div/div[3]/div[1]/h3/a")
	private WebElement addtariffclick;

	public WebElement getAddtariffclick() {
		return addtariffclick;
	}
	

}
