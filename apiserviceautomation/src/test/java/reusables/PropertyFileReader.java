package reusables;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

import org.apache.log4j.Logger;


public class PropertyFileReader {
	static Logger log = Logger.getRootLogger();

	/* -----This method accepts key in string format and returns value from property file-----*/	
	public static String retrieveValueForGivenKey(String givenKey){	
		String value= null;
		try {
			String filepath = System.getProperty("user.dir") + "/src/test/resources/environmentprops/configuration.properties";		
			File configFile = new File(filepath);
			FileInputStream fileInptStream= new FileInputStream(configFile);
			Properties props = new Properties();
			props.load(fileInptStream);
			value = props.getProperty(givenKey);	
			log.info("Value for given key "+givenKey+" is "+value);
		} catch (Exception e) 
		{
			log.debug("Encountered exception while parsing the property file" +e.getMessage());
			e.printStackTrace();
		}
		return value;
	}
}