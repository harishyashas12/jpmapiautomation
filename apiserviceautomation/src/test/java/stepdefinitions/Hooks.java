package stepdefinitions;


import org.apache.log4j.Logger;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static String scenarioName;
	Logger log = Logger.getRootLogger();
	
	@Before
    public void beforeScenario(Scenario scenario){
		scenarioName=scenario.getName();
		log.info("Executing the scenario : "+scenarioName+" >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
 
	@After
    public void afterScenario(){
		log.info("Executed the Scenario successfully : " +scenarioName+" >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		log.info("----------------------------------------------------------------------");
    }
	  
}
