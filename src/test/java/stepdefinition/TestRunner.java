package stepdefinition;


	
	import org.junit.runner.RunWith;
	import cucumber.api.junit.Cucumber;
	import cucumber.api.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(features = "D:\\workspace\\telecom\\src\\test\\resources\\telecom.feature",dryRun=false,glue = {"stepdefinition"}, plugin = {
			"html:target1" ,"json:src/test/resources/jsonReport.json"} )
	public class TestRunner {

	}


