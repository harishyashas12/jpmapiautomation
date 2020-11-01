package stepdefinitions;

import java.util.List;
import java.util.Map;
import net.minidev.json.JSONArray;
import org.apache.log4j.Logger;
import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import reusables.PropertyFileReader;
import apihelpers.RequestParams;
import apihelpers.RestRequestRunner;
import apihelpers.ServiceResponseHelper;

public class APIValidationStepDefs {
	Response response = null;
	Logger log = Logger.getRootLogger();
	String envURL;


	@Given("^Setup the URI using given endpoint \"([^\"]*)\"$")
	public void setUpTheURIUsingGivenEndpoint(String endPoint) throws Throwable {
		//Get the URL from config file
		String baseUrl = PropertyFileReader.retrieveValueForGivenKey("url").toString();		
		String apiEndPoint = PropertyFileReader.retrieveValueForGivenKey(endPoint).toString();
		envURL = baseUrl+apiEndPoint;
		log.info("URI is "+envURL+" >>>>");
	}


	@When("^Run the RestFul service using given inputs \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void runTheRestFulServiceUsingGivenInputs(String operationType, String parameter, String paramValue) throws Throwable {	
		Map<String, String> requestParams = RequestParams.addRequestParams(parameter.split(":"), paramValue.split(":") );
		response = RestRequestRunner.runRequestWithGivenParams(operationType, null, envURL, requestParams);
		log.info("API Service "+envURL+" ran successfully>>>>");
	}


	@Then("^Validate the service returns given response code \"([^\"]*)\"$")
	public void validateTheServiceRunsAndReturnsGivenResponeCode(String responseCode) throws Throwable {
		log.info("Service returned response code "+ServiceResponseHelper.getServiceResponseStatCode(response)+" >>>>");
		Assert.assertTrue(ServiceResponseHelper.getServiceResponseStatCode(response) == Integer.parseInt(responseCode));
	}

	@And("^Validate the record counts matches as per expected counts \"([^\"]*)\"$")
	public void validateTheRecordCcountsMatchesAsPerExpectedCounts(String expectedObjectsCounts) throws Throwable {
		Assert.assertTrue(ServiceResponseHelper.getJsonObjectInArrayForGivenResponseObj(response).size() == Integer.parseInt(expectedObjectsCounts));
		log.info("Objects counts are matching as expected>>>>");
	}


	@And("^Validate the service returned required details for given parameters \"([^\"]*)\" \"([^\"]*)\"$")
	public void validateTheServiceReturnedRequiredDetailsForGivenParameters(String parameter, String value) throws Throwable {
		String[] parameters = parameter.split(":");
		String[] values = value.split(":");

		for(int i=0;i<parameters.length;i++) {
			if(!parameter.equalsIgnoreCase("NA")) {
				JSONArray listOfObjects = ServiceResponseHelper.getJsonObjectInArrayForGivenResponseObj(response);
				if(listOfObjects == null) {
					Assert.assertTrue(false);
				}
				else {
					for(int j=0;j<listOfObjects.size();j++) {
						@SuppressWarnings("rawtypes")
						Map postObject = (Map) listOfObjects.get(j);
						Assert.assertEquals(values[i],postObject.get(parameters[i]).toString());
					}
				}
			}
		}
		log.info("Response validation is completed successfully>>>>");
	}

	@Then("^Validate the given attributes are present in response appropriately$")
	public void validateTheGivenAttributesArePresentInResponseAppropriately(DataTable attributesList) throws Throwable {
		List<String> attributes = attributesList.transpose().asList(String.class);
		@SuppressWarnings("rawtypes")
		Map postObject = (Map) ServiceResponseHelper.getJsonObjectInArrayForGivenResponseObj(response).get(0);       
		for(String key : attributes) {
			Assert.assertTrue(postObject.containsKey(key)); 
		}
		log.info("Given attributes are present in response appropriately>>>>");
	}
}