@smoke @regression @servicevalidation
Feature: Post, Comments and User API services validation flows
  
  @validateserviceruns
  Scenario Outline: Validate that "<Endpoint>" service is up and running and returns appropriate details for "<Parameter>" parameter/s  
    Given Setup the URI using given endpoint "<Endpoint>"
    When Run the RestFul service using given inputs "<Method>" "<Parameter>" "<ParamValue>"
    Then Validate the service returns given response code "<StatusCode>"
    And Validate the record counts matches as per expected counts "<ExpectedCounts>" 
    And Validate the service returned required details for given parameters "<Parameter>" "<ParamValue>"
    
	 Examples: 
      | Endpoint             |Method   |Parameter    | ParamValue             |  StatusCode|ExpectedCounts|
      #to test with valid parameters/data
      | posts                |Get      | userId      | 1                      |  200       |10            |
      | posts                |Get      | id          | 1                      |  200       |1             |
      | posts                |Get      | title       | qui est esse           |  200       |1             |
      | comments             |Get      | postId      | 2                      |  200       |5             |
      | comments             |Get      | id          | 6                      |  200       |1             |
      | comments             |Get      | name        | et omnis dolorem       |  200       |1             |
      | comments             |Get      | email       | Mallory_Kunze@marie.org|  200       |1             |
      | users                |Get      | id          | 1                      |  200       |1             |
      | users                |Get      | name        | Leanne Graham          |  200       |1             |
      | users                |Get      | username    | Bret                   |  200       |1             |
      | users                |Get      | email       | Sincere@april.biz      |  200       |1             |
      | users                |Get      | phone       | 024-648-3804           |  200       |1             |
      #to test with invalid data   
      | posts                |Get      | userId      |104                     |  200       |0             |
      | comments             |Get      | postId      |498                     |  200       |0             | 
      | users                |Get      | email       |xyz@pqr.com             |  200       |0             |
      #to test with with no params and to see all the records are fetched
      | posts                |Get      | NA          | NA                     |  200       |100           |
      | comments             |Get      | NA          | NA                     |  200       |500           |
      | users                |Get      | NA          | NA                     |  200       |10            |
      #to test with multiple parameters (provide parameter and its value with appropriate sequence seperated with ":")
      | posts                |Get      | userId:title| 1:qui est esse         |  200       |1             |
      | comments             |Get      | postId:id   | 2:6                    |  200       |1             |
      | users                |Get      | id:name     | 1:Leanne Graham        |  200       |1             |
      
      
  @invalidapiresource
  Scenario Outline: Validate when service with invalid endpoint or resources will not run successfully and returns failed response code  
    Given Setup the URI using given endpoint "<Endpoint>"
    When Run the RestFul service using given inputs "<Method>" "<Parameter>" "<ParamValue>"
    Then Validate the service returns given response code "<StatusCode>"
    
	 Examples: 
      | Endpoint             |Method|Parameter | ParamValue             |  StatusCode|    
      | test                 |Get   | NA       | NA                     |  404       |
      
      
      
    @validatepostattributes
    Scenario Outline: Validate the given attributes present in json response for posts service
    Given Setup the URI using given endpoint "<Endpoint>"  
    When Run the RestFul service using given inputs "<Method>" "<Parameter>" "<ParamValue>"
    Then Validate the service returns given response code "<StatusCode>"
    And Validate the given attributes are present in response appropriately
    |userId   |
    |id       |
    |title    |
    |body     |
    
	 Examples: 
     | Endpoint             |Method   |Parameter    | ParamValue             |  StatusCode|
     | posts                |Get      | userId      | 1                      |  200       |
        
        
    @validatecommentattributes
    Scenario Outline: Validate the give  attributes present in json response for posts service
    Given Setup the URI using given endpoint "<Endpoint>"  
    When Run the RestFul service using given inputs "<Method>" "<Parameter>" "<ParamValue>"
    Then Validate the service returns given response code "<StatusCode>"
    And Validate the given attributes are present in response appropriately
    |postId   |
    |id       |
    |name     |
    |email    |
    |body     |
    
	 Examples: 
     | Endpoint             |Method   |Parameter    | ParamValue             |  StatusCode|
     | comments             |Get      | userId      | 1                      |  200       |
        
        
    @validateusersattributes
    Scenario Outline: Validate the give  attributes present in json response for users service
    Given Setup the URI using given endpoint "<Endpoint>"  
    When Run the RestFul service using given inputs "<Method>" "<Parameter>" "<ParamValue>"
    Then Validate the service returns given response code "<StatusCode>"
    And Validate the given attributes are present in response appropriately
    |id       |
    |name     |
    |email    |
    |address  |
    |phone    |
    |website  |
    |company  |
    
	 Examples: 
     | Endpoint             |Method   |Parameter    | ParamValue             |  StatusCode|
     | users                |Get      | userId      | 1                      |  200       |