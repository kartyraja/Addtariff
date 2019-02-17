package stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hook {
	
    public static WebDriver driver;
	
	@Before()
	public static void luncher() {
	System.setProperty("webdriver.chrome.driver", "D:\\workspace\\telecom\\jar\\chromedriver.exe");
    driver = new ChromeDriver();
	
	
	}
	@After()
	public static void quit() {
		driver.quit();
	}

	
}
