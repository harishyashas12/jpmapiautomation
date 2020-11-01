package apihelpers;
import java.util.HashMap;
import java.util.Map;

public class RequestParams {
	
	/* -----This method accepts parameters and its values in String arrays and returns Map-----*/
	public static Map<String,String> addRequestParams(String[] key, String[] value) {
	 Map<String,String> params=new HashMap<String,String>();
	 for(int i=0;i<key.length;i++) {
		 params.put(key[i],value[i]);
	 }
	 return params;
 	}
}