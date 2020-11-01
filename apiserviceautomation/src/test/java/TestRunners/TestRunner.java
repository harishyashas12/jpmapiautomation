package TestRunners;

import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"html:target/cucumberexecreport" }, 
		features = "src/test/resources/features", 
		glue = {"stepdefinitions" },
		monochrome = true,
		dryRun = false, 
		tags = {"@servicevalidation"}
		)


public class TestRunner {
	static Logger log = Logger.getRootLogger();

	@BeforeClass
	public static void setUp() {
		log.info("Started API Test Execution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	}


	@AfterClass
	public static void tearDown() {
		log.info("Completed API Test Execution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	}

}
