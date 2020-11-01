package apihelpers;

import org.apache.log4j.Logger;
import org.json.JSONException;
import com.jayway.jsonpath.JsonPath;
import net.minidev.json.JSONArray;
import io.restassured.response.Response;

public class ServiceResponseHelper {	

	static Logger log = Logger.getRootLogger();

	/*********************This method returns status code in int type for given response************************************/
	public static int getServiceResponseStatCode(Response response) {	  
		return response.getStatusCode();
	}	

	/*********************This method returns list of json objects in json array for given response*************************/
	public static JSONArray getJsonObjectInArrayForGivenResponseObj(Response response) throws JSONException {		
		JSONArray objectList = null;
		try {
			objectList = JsonPath.read(response.asString(), "$");
		}
		catch(NullPointerException e) {
			log.debug("Given Key is not present "+e.getMessage());
		}
		catch(Exception e) {
			log.debug("Exception while reading the respons for given key : "+e.getMessage());			
		}
		return objectList;
	}
}