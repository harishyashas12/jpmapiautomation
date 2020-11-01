$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api_validations.feature");
formatter.feature({
  "line": 2,
  "name": "Post, Comments and User API services validation flows",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate that \"\u003cEndpoint\u003e\" service is up and running and returns appropriate details for \"\u003cParameter\u003e\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validateserviceruns"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"\u003cEndpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"\u003cMethod\u003e\" \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"\u003cExpectedCounts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;",
  "rows": [
    {
      "cells": [
        "Endpoint",
        "Method",
        "Parameter",
        "ParamValue",
        "StatusCode",
        "ExpectedCounts"
      ],
      "line": 13,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;1"
    },
    {
      "comments": [
        {
          "line": 14,
          "value": "#to test with valid parameters/data"
        }
      ],
      "cells": [
        "posts",
        "Get",
        "userId",
        "1",
        "200",
        "10"
      ],
      "line": 15,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;2"
    },
    {
      "cells": [
        "posts",
        "Get",
        "id",
        "1",
        "200",
        "1"
      ],
      "line": 16,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;3"
    },
    {
      "cells": [
        "posts",
        "Get",
        "title",
        "qui est esse",
        "200",
        "1"
      ],
      "line": 17,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;4"
    },
    {
      "cells": [
        "comments",
        "Get",
        "postId",
        "2",
        "200",
        "5"
      ],
      "line": 18,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;5"
    },
    {
      "cells": [
        "comments",
        "Get",
        "id",
        "6",
        "200",
        "1"
      ],
      "line": 19,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;6"
    },
    {
      "cells": [
        "comments",
        "Get",
        "name",
        "et omnis dolorem",
        "200",
        "1"
      ],
      "line": 20,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;7"
    },
    {
      "cells": [
        "comments",
        "Get",
        "email",
        "Mallory_Kunze@marie.org",
        "200",
        "1"
      ],
      "line": 21,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;8"
    },
    {
      "cells": [
        "users",
        "Get",
        "id",
        "1",
        "200",
        "1"
      ],
      "line": 22,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;9"
    },
    {
      "cells": [
        "users",
        "Get",
        "name",
        "Leanne Graham",
        "200",
        "1"
      ],
      "line": 23,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;10"
    },
    {
      "cells": [
        "users",
        "Get",
        "username",
        "Bret",
        "200",
        "1"
      ],
      "line": 24,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;11"
    },
    {
      "cells": [
        "users",
        "Get",
        "email",
        "Sincere@april.biz",
        "200",
        "1"
      ],
      "line": 25,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;12"
    },
    {
      "cells": [
        "users",
        "Get",
        "phone",
        "024-648-3804",
        "200",
        "1"
      ],
      "line": 26,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;13"
    },
    {
      "comments": [
        {
          "line": 27,
          "value": "#to test with invalid data"
        }
      ],
      "cells": [
        "posts",
        "Get",
        "userId",
        "104",
        "200",
        "0"
      ],
      "line": 28,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;14"
    },
    {
      "cells": [
        "comments",
        "Get",
        "postId",
        "498",
        "200",
        "0"
      ],
      "line": 29,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;15"
    },
    {
      "cells": [
        "users",
        "Get",
        "email",
        "xyz@pqr.com",
        "200",
        "0"
      ],
      "line": 30,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;16"
    },
    {
      "comments": [
        {
          "line": 31,
          "value": "#to test with with no params and to see all the records are fetched"
        }
      ],
      "cells": [
        "posts",
        "Get",
        "NA",
        "NA",
        "200",
        "100"
      ],
      "line": 32,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;17"
    },
    {
      "cells": [
        "comments",
        "Get",
        "NA",
        "NA",
        "200",
        "500"
      ],
      "line": 33,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;18"
    },
    {
      "cells": [
        "users",
        "Get",
        "NA",
        "NA",
        "200",
        "10"
      ],
      "line": 34,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;19"
    },
    {
      "comments": [
        {
          "line": 35,
          "value": "#to test with multiple parameters (provide parameter and its value with appropriate sequence seperated with \":\")"
        }
      ],
      "cells": [
        "posts",
        "Get",
        "userId:title",
        "1:qui est esse",
        "200",
        "1"
      ],
      "line": 36,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;20"
    },
    {
      "cells": [
        "comments",
        "Get",
        "postId:id",
        "2:6",
        "200",
        "1"
      ],
      "line": 37,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;21"
    },
    {
      "cells": [
        "users",
        "Get",
        "id:name",
        "1:Leanne Graham",
        "200",
        "1"
      ],
      "line": 38,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;22"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 965600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#to test with valid parameters/data"
    }
  ],
  "line": 15,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"userId\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"userId\" \"1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 145384400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 3047377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 4456000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 208365800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userId",
      "offset": 69
    },
    {
      "val": "1",
      "offset": 78
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1628100,
  "status": "passed"
});
formatter.after({
  "duration": 1638000,
  "status": "passed"
});
formatter.before({
  "duration": 999400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"id\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"id\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"id\" \"1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 2523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "id",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 300899900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 794200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 49575300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 69
    },
    {
      "val": "1",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1077700,
  "status": "passed"
});
formatter.after({
  "duration": 865700,
  "status": "passed"
});
formatter.before({
  "duration": 757500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"title\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"title\" \"qui est esse\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"title\" \"qui est esse\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 1756700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "title",
      "offset": 50
    },
    {
      "val": "qui est esse",
      "offset": 58
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 301852500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 714800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1460600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 69
    },
    {
      "val": "qui est esse",
      "offset": 77
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1080900,
  "status": "passed"
});
formatter.after({
  "duration": 788300,
  "status": "passed"
});
formatter.before({
  "duration": 536000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"postId\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"postId\" \"2\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"5\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"postId\" \"2\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 1998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "postId",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 315913700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 769700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2078700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId",
      "offset": 69
    },
    {
      "val": "2",
      "offset": 78
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1626800,
  "status": "passed"
});
formatter.after({
  "duration": 852500,
  "status": "passed"
});
formatter.before({
  "duration": 474800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"id\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"id\" \"6\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"id\" \"6\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 2387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "id",
      "offset": 50
    },
    {
      "val": "6",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 336510700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 667800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1528300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 69
    },
    {
      "val": "6",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1411800,
  "status": "passed"
});
formatter.after({
  "duration": 887300,
  "status": "passed"
});
formatter.before({
  "duration": 557200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"name\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"name\" \"et omnis dolorem\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"name\" \"et omnis dolorem\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 1814800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "name",
      "offset": 50
    },
    {
      "val": "et omnis dolorem",
      "offset": 57
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 264828200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 638400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1319000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 69
    },
    {
      "val": "et omnis dolorem",
      "offset": 76
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 912500,
  "status": "passed"
});
formatter.after({
  "duration": 833700,
  "status": "passed"
});
formatter.before({
  "duration": 609600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"email\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"email\" \"Mallory_Kunze@marie.org\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"email\" \"Mallory_Kunze@marie.org\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 2270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "email",
      "offset": 50
    },
    {
      "val": "Mallory_Kunze@marie.org",
      "offset": 58
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 312909600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 649400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 69
    },
    {
      "val": "Mallory_Kunze@marie.org",
      "offset": 77
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 805200,
  "status": "passed"
});
formatter.after({
  "duration": 949200,
  "status": "passed"
});
formatter.before({
  "duration": 507800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"id\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"id\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"id\" \"1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 1752600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "id",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 265607300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 665700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 69
    },
    {
      "val": "1",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1574800,
  "status": "passed"
});
formatter.after({
  "duration": 1117700,
  "status": "passed"
});
formatter.before({
  "duration": 522800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"name\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"name\" \"Leanne Graham\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"name\" \"Leanne Graham\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 2236200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "name",
      "offset": 50
    },
    {
      "val": "Leanne Graham",
      "offset": 57
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 246581800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 683800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 1535200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 69
    },
    {
      "val": "Leanne Graham",
      "offset": 76
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1047000,
  "status": "passed"
});
formatter.after({
  "duration": 922900,
  "status": "passed"
});
formatter.before({
  "duration": 508400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"username\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"username\" \"Bret\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"username\" \"Bret\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 2267300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "username",
      "offset": 50
    },
    {
      "val": "Bret",
      "offset": 61
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 299670000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1227600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 3852600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 69
    },
    {
      "val": "Bret",
      "offset": 80
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2550100,
  "status": "passed"
});
formatter.after({
  "duration": 2712700,
  "status": "passed"
});
formatter.before({
  "duration": 1214000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"email\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"email\" \"Sincere@april.biz\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"email\" \"Sincere@april.biz\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 6619200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "email",
      "offset": 50
    },
    {
      "val": "Sincere@april.biz",
      "offset": 58
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 318569000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1945400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 3833900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 69
    },
    {
      "val": "Sincere@april.biz",
      "offset": 77
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2666000,
  "status": "passed"
});
formatter.after({
  "duration": 2672400,
  "status": "passed"
});
formatter.before({
  "duration": 1318300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"phone\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"phone\" \"024-648-3804\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"phone\" \"024-648-3804\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 4295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "phone",
      "offset": 50
    },
    {
      "val": "024-648-3804",
      "offset": 58
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 296883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1349300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2856500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 69
    },
    {
      "val": "024-648-3804",
      "offset": 77
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2034000,
  "status": "passed"
});
formatter.after({
  "duration": 2475900,
  "status": "passed"
});
formatter.before({
  "duration": 1367300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#to test with invalid data"
    }
  ],
  "line": 28,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"userId\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId\" \"104\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"0\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"userId\" \"104\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 5961900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId",
      "offset": 50
    },
    {
      "val": "104",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 291748500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1058300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userId",
      "offset": 69
    },
    {
      "val": "104",
      "offset": 78
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1499000,
  "status": "passed"
});
formatter.after({
  "duration": 1840800,
  "status": "passed"
});
formatter.before({
  "duration": 1179600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"postId\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"postId\" \"498\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"0\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"postId\" \"498\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 4088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "postId",
      "offset": 50
    },
    {
      "val": "498",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 307035800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1159900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2247800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId",
      "offset": 69
    },
    {
      "val": "498",
      "offset": 78
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2023900,
  "status": "passed"
});
formatter.after({
  "duration": 2297800,
  "status": "passed"
});
formatter.before({
  "duration": 1296900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"email\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"email\" \"xyz@pqr.com\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"0\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"email\" \"xyz@pqr.com\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3954600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "email",
      "offset": 50
    },
    {
      "val": "xyz@pqr.com",
      "offset": 58
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 313318000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 3467500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 69
    },
    {
      "val": "xyz@pqr.com",
      "offset": 77
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2364000,
  "status": "passed"
});
formatter.after({
  "duration": 2703700,
  "status": "passed"
});
formatter.before({
  "duration": 3369500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#to test with with no params and to see all the records are fetched"
    }
  ],
  "line": 32,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"NA\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"NA\" \"NA\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"NA\" \"NA\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "NA",
      "offset": 50
    },
    {
      "val": "NA",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 340265200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 2184700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 17962200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NA",
      "offset": 69
    },
    {
      "val": "NA",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2671100,
  "status": "passed"
});
formatter.after({
  "duration": 3913900,
  "status": "passed"
});
formatter.before({
  "duration": 1429600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"NA\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"NA\" \"NA\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"500\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"NA\" \"NA\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3429700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "NA",
      "offset": 50
    },
    {
      "val": "NA",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 321052000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 2091200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 38943900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NA",
      "offset": 69
    },
    {
      "val": "NA",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 843600,
  "status": "passed"
});
formatter.after({
  "duration": 2543700,
  "status": "passed"
});
formatter.before({
  "duration": 737000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"NA\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"NA\" \"NA\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"10\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"NA\" \"NA\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3461300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "NA",
      "offset": 50
    },
    {
      "val": "NA",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 289873300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 846600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 3891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NA",
      "offset": 69
    },
    {
      "val": "NA",
      "offset": 74
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 992300,
  "status": "passed"
});
formatter.after({
  "duration": 1765700,
  "status": "passed"
});
formatter.before({
  "duration": 768600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "#to test with multiple parameters (provide parameter and its value with appropriate sequence seperated with \":\")"
    }
  ],
  "line": 36,
  "name": "Validate that \"posts\" service is up and running and returns appropriate details for \"userId:title\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId:title\" \"1:qui est esse\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"userId:title\" \"1:qui est esse\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId:title",
      "offset": 50
    },
    {
      "val": "1:qui est esse",
      "offset": 65
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 301180700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1375100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2138600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userId:title",
      "offset": 69
    },
    {
      "val": "1:qui est esse",
      "offset": 84
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2620200,
  "status": "passed"
});
formatter.after({
  "duration": 1977200,
  "status": "passed"
});
formatter.before({
  "duration": 1110900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate that \"comments\" service is up and running and returns appropriate details for \"postId:id\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"postId:id\" \"2:6\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"postId:id\" \"2:6\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 7008200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "postId:id",
      "offset": 50
    },
    {
      "val": "2:6",
      "offset": 62
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 293260800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2876500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId:id",
      "offset": 69
    },
    {
      "val": "2:6",
      "offset": 81
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 2542100,
  "status": "passed"
});
formatter.after({
  "duration": 1923800,
  "status": "passed"
});
formatter.before({
  "duration": 1008700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Validate that \"users\" service is up and running and returns appropriate details for \"id:name\" parameter/s",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-that-\"\u003cendpoint\u003e\"-service-is-up-and-running-and-returns-appropriate-details-for-\"\u003cparameter\u003e\"-parameter/s;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@validateserviceruns"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Run the RestFul service using given inputs \"Get\" \"id:name\" \"1:Leanne Graham\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the record counts matches as per expected counts \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the service returned required details for given parameters \"id:name\" \"1:Leanne Graham\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3348300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "id:name",
      "offset": 50
    },
    {
      "val": "1:Leanne Graham",
      "offset": 60
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 282442600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.validateTheRecordCcountsMatchesAsPerExpectedCounts(String)"
});
formatter.result({
  "duration": 2020900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id:name",
      "offset": 69
    },
    {
      "val": "1:Leanne Graham",
      "offset": 79
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceReturnedRequiredDetailsForGivenParameters(String,String)"
});
formatter.result({
  "duration": 1730400,
  "status": "passed"
});
formatter.after({
  "duration": 1955100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Validate when service with invalid endpoint or resources will not run successfully and returns failed response code",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-when-service-with-invalid-endpoint-or-resources-will-not-run-successfully-and-returns-failed-response-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@invalidapiresource"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Setup the URI using given endpoint \"\u003cEndpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Run the RestFul service using given inputs \"\u003cMethod\u003e\" \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Validate the service returns given response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-when-service-with-invalid-endpoint-or-resources-will-not-run-successfully-and-returns-failed-response-code;",
  "rows": [
    {
      "cells": [
        "Endpoint",
        "Method",
        "Parameter",
        "ParamValue",
        "StatusCode"
      ],
      "line": 48,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-when-service-with-invalid-endpoint-or-resources-will-not-run-successfully-and-returns-failed-response-code;;1"
    },
    {
      "cells": [
        "test",
        "Get",
        "NA",
        "NA",
        "404"
      ],
      "line": 49,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-when-service-with-invalid-endpoint-or-resources-will-not-run-successfully-and-returns-failed-response-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 934400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate when service with invalid endpoint or resources will not run successfully and returns failed response code",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-when-service-with-invalid-endpoint-or-resources-will-not-run-successfully-and-returns-failed-response-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 41,
      "name": "@invalidapiresource"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Setup the URI using given endpoint \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Run the RestFul service using given inputs \"Get\" \"NA\" \"NA\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Validate the service returns given response code \"404\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3524700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "NA",
      "offset": 50
    },
    {
      "val": "NA",
      "offset": 55
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 289707700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1370600,
  "status": "passed"
});
formatter.after({
  "duration": 1914300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Validate the given attributes present in json response for posts service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-given-attributes-present-in-json-response-for-posts-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@validatepostattributes"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Setup the URI using given endpoint \"\u003cEndpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Run the RestFul service using given inputs \"\u003cMethod\u003e\" \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Validate the service returns given response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 59
    },
    {
      "cells": [
        "id"
      ],
      "line": 60
    },
    {
      "cells": [
        "title"
      ],
      "line": 61
    },
    {
      "cells": [
        "body"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-given-attributes-present-in-json-response-for-posts-service;",
  "rows": [
    {
      "cells": [
        "Endpoint",
        "Method",
        "Parameter",
        "ParamValue",
        "StatusCode"
      ],
      "line": 65,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-given-attributes-present-in-json-response-for-posts-service;;1"
    },
    {
      "cells": [
        "posts",
        "Get",
        "userId",
        "1",
        "200"
      ],
      "line": 66,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-given-attributes-present-in-json-response-for-posts-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1189600,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Validate the given attributes present in json response for posts service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-given-attributes-present-in-json-response-for-posts-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 53,
      "name": "@validatepostattributes"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Setup the URI using given endpoint \"posts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 59
    },
    {
      "cells": [
        "id"
      ],
      "line": 60
    },
    {
      "cells": [
        "title"
      ],
      "line": 61
    },
    {
      "cells": [
        "body"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 3855800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 281453800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 842000,
  "status": "passed"
});
formatter.match({
  "location": "APIValidationStepDefs.validateTheGivenAttributesArePresentInResponseAppropriately(DataTable)"
});
formatter.result({
  "duration": 7379000,
  "status": "passed"
});
formatter.after({
  "duration": 1895100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Validate the give  attributes present in json response for posts service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-posts-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@validatecommentattributes"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "Setup the URI using given endpoint \"\u003cEndpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "Run the RestFul service using given inputs \"\u003cMethod\u003e\" \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "Validate the service returns given response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 75
    },
    {
      "cells": [
        "id"
      ],
      "line": 76
    },
    {
      "cells": [
        "name"
      ],
      "line": 77
    },
    {
      "cells": [
        "email"
      ],
      "line": 78
    },
    {
      "cells": [
        "body"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-posts-service;",
  "rows": [
    {
      "cells": [
        "Endpoint",
        "Method",
        "Parameter",
        "ParamValue",
        "StatusCode"
      ],
      "line": 82,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-posts-service;;1"
    },
    {
      "cells": [
        "comments",
        "Get",
        "userId",
        "1",
        "200"
      ],
      "line": 83,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-posts-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1118500,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validate the give  attributes present in json response for posts service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-posts-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    },
    {
      "line": 69,
      "name": "@validatecommentattributes"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "Setup the URI using given endpoint \"comments\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 75
    },
    {
      "cells": [
        "id"
      ],
      "line": 76
    },
    {
      "cells": [
        "name"
      ],
      "line": 77
    },
    {
      "cells": [
        "email"
      ],
      "line": 78
    },
    {
      "cells": [
        "body"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 4726400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 280496100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 1245700,
  "status": "passed"
});
formatter.match({
  "location": "APIValidationStepDefs.validateTheGivenAttributesArePresentInResponseAppropriately(DataTable)"
});
formatter.result({
  "duration": 32152000,
  "status": "passed"
});
formatter.after({
  "duration": 3177000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "Validate the give  attributes present in json response for users service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-users-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@validateusersattributes"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Setup the URI using given endpoint \"\u003cEndpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Run the RestFul service using given inputs \"\u003cMethod\u003e\" \"\u003cParameter\u003e\" \"\u003cParamValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "Validate the service returns given response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 92
    },
    {
      "cells": [
        "name"
      ],
      "line": 93
    },
    {
      "cells": [
        "email"
      ],
      "line": 94
    },
    {
      "cells": [
        "address"
      ],
      "line": 95
    },
    {
      "cells": [
        "phone"
      ],
      "line": 96
    },
    {
      "cells": [
        "website"
      ],
      "line": 97
    },
    {
      "cells": [
        "company"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 100,
  "name": "",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-users-service;",
  "rows": [
    {
      "cells": [
        "Endpoint",
        "Method",
        "Parameter",
        "ParamValue",
        "StatusCode"
      ],
      "line": 101,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-users-service;;1"
    },
    {
      "cells": [
        "users",
        "Get",
        "userId",
        "1",
        "200"
      ],
      "line": 102,
      "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-users-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 922000,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Validate the give  attributes present in json response for users service",
  "description": "",
  "id": "post,-comments-and-user-api-services-validation-flows;validate-the-give--attributes-present-in-json-response-for-users-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 86,
      "name": "@validateusersattributes"
    },
    {
      "line": 1,
      "name": "@servicevalidation"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Setup the URI using given endpoint \"users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Run the RestFul service using given inputs \"Get\" \"userId\" \"1\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "Validate the service returns given response code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Validate the given attributes are present in response appropriately",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 92
    },
    {
      "cells": [
        "name"
      ],
      "line": 93
    },
    {
      "cells": [
        "email"
      ],
      "line": 94
    },
    {
      "cells": [
        "address"
      ],
      "line": 95
    },
    {
      "cells": [
        "phone"
      ],
      "line": 96
    },
    {
      "cells": [
        "website"
      ],
      "line": 97
    },
    {
      "cells": [
        "company"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 36
    }
  ],
  "location": "APIValidationStepDefs.setUpTheURIUsingGivenEndpoint(String)"
});
formatter.result({
  "duration": 19994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get",
      "offset": 44
    },
    {
      "val": "userId",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "APIValidationStepDefs.runTheRestFulServiceUsingGivenInputs(String,String,String)"
});
formatter.result({
  "duration": 257552200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "APIValidationStepDefs.validateTheServiceRunsAndReturnsGivenResponeCode(String)"
});
formatter.result({
  "duration": 567300,
  "status": "passed"
});
formatter.match({
  "location": "APIValidationStepDefs.validateTheGivenAttributesArePresentInResponseAppropriately(DataTable)"
});
formatter.result({
  "duration": 1681000,
  "status": "passed"
});
formatter.after({
  "duration": 831500,
  "status": "passed"
});
});