package apihelpers;


import static io.restassured.RestAssured.given;
import java.util.Map;
import org.apache.log4j.Logger;
import org.junit.Assert;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


public class RestRequestRunner {

	static Logger log = Logger.getRootLogger();

	/******Currently below method supports only Get method, it can be enhanced to support other HTTPS methods and other input types********************/
	/**************This method accepts required parameters (requests parameters in map object) and runs the given service and returns response*************************/
	public static Response runRequestWithGivenParams(String operation, Map<String,String> headers,String url,Map<String,String> requestParams) {  

		// Building request by using requestSpecBuilder
		RequestSpecBuilder builder = new RequestSpecBuilder();		
		Response response = null;

		//Set API's Headers
		if(headers!=null) {
			builder.addHeaders(headers); 
		}

		//Add required API's parameters
		builder.addParams(requestParams);
		RequestSpecification requestSpec = builder.build();

		//Set https method type based on input operation
		Method httpsMethod = null;
		String methodType = operation.toUpperCase(); 
		if(methodType.equalsIgnoreCase("Get"))  { 
			httpsMethod = Method.GET;
		}
		else { 	 
			System.out.println("Input method type is invalid"); 
			Assert.assertFalse(true);
		}

		//Configure with required parameters and run the service
		try {
			response = given()	
					.spec(requestSpec)
					.relaxedHTTPSValidation()
					.when()
					.request(httpsMethod,url);
		}
		catch(Exception e) {
			log.debug("There is an exception while running the service : "+e.getMessage());
			e.printStackTrace();
			Assert.assertTrue(false);
		}

		return response;
	}


	/***Below method can be enhanced to support all https methods************(currently not used)*************/
	/* *************This method accepts required parameters (requests body in string format) and runs the given service and returns response*************************/
	public static Response runRequestWithGivenParams(String operation, Map<String,String> headers,String url,String requestBody) {  

		// Building request by using requestSpecBuilder
		RequestSpecBuilder builder = new RequestSpecBuilder();
		Response response = null;

		//Set API's Headers
		if(headers!=null) {
			builder.addHeaders(headers); 
		}

		//Add required API's parameters
		builder.setBody(requestBody);


		if(operation.equalsIgnoreCase("Post")) {
			builder.setContentType("application/json; charset=UTF-8");
		}
		RequestSpecification requestSpec = builder.build();

		//Set https method type as input operation
		Method httpsMethod = null;

		String methodType = operation.toUpperCase(); 
		switch(methodType)       { 
		case "POST": 
			httpsMethod = Method.POST;
			break; 
		case "GET": 
			httpsMethod = Method.GET; 
			break; 
		case "DELETE": 
			httpsMethod = Method.DELETE; 
			break; 
		case "PUT": 
			httpsMethod = Method.PUT; 
			break; 
		default: 
			System.out.println("Input method type is invalid"); 
			Assert.assertFalse(true);
		} 


		//Configure with required parameters and run the service
		try {
			response = given()	
					.spec(requestSpec)
					.relaxedHTTPSValidation()
					.when()
					.request(httpsMethod,url);
		}
		catch(Exception e) {
			log.debug("There is an exception while running the service : "+e.getMessage()); 
			e.printStackTrace();
			Assert.assertTrue(false);
		}

		return response;
	}
}
