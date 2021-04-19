$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Login The Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Username In \"\u003cUsername\u003e\" Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The Password In \"\u003cPassword\u003e\" Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;user-login-the-application;;1"
    },
    {
      "cells": [
        "SSS",
        "456"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;user-login-the-application;;2"
    },
    {
      "cells": [
        "KKK",
        "789"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;user-login-the-application;;3"
    },
    {
      "cells": [
        "sarika14",
        "sarika@2014"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;user-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User Login The Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Username In \"SSS\" Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The Password In \"456\" Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 18887416672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SSS",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Field(String)"
});
formatter.result({
  "duration": 855647291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Field(String)"
});
formatter.result({
  "duration": 293792475,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 637044730,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Login The Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Username In \"KKK\" Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The Password In \"789\" Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 331182624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KKK",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Field(String)"
});
formatter.result({
  "duration": 448010454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Field(String)"
});
formatter.result({
  "duration": 479836751,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 797956499,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Login The Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Username In \"sarika14\" Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The Password In \"sarika@2014\" Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 483503687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sarika14",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Field(String)"
});
formatter.result({
  "duration": 283937934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sarika@2014",
      "offset": 28
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Field(String)"
});
formatter.result({
  "duration": 275885605,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2785870540,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User select The Details",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Clicks The Page Navigates And There Is An Dropdown Option To Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Selects The Hotels In The Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Selects The Room Type According To The Requirement",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Selects The Number Of Rooms Required",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Selects The Check In Date In The DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Selects The Check Out Date In The DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Selects The Adults per Room Required",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Selects The Children per Room Required",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Clicks On The Search Button Followed By Selected All Options And It Navigates To The Select Hotel Page For The Confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_Page_Navigates_And_There_Is_An_Dropdown_Option_To_Select_The_Location()"
});
formatter.result({
  "duration": 662934416,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Hotels_In_The_Dropdown_List()"
});
formatter.result({
  "duration": 364701030,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Room_Type_According_To_The_Requirement()"
});
formatter.result({
  "duration": 531484563,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Number_Of_Rooms_Required()"
});
formatter.result({
  "duration": 897322997,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Check_In_Date_In_The_DropDown()"
});
formatter.result({
  "duration": 1107815378,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Check_Out_Date_In_The_DropDown()"
});
formatter.result({
  "duration": 336083068,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Adults_per_Room_Required()"
});
formatter.result({
  "duration": 308684619,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Children_per_Room_Required()"
});
formatter.result({
  "duration": 253502833,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_Search_Button_Followed_By_Selected_All_Options_And_It_Navigates_To_The_Select_Hotel_Page_For_The_Confirmation()"
});
formatter.result({
  "duration": 1351003672,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Clicks It Navigates To The Select Hotel Page And Confirms With The Checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Clicks The Confirmation By Seleting The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_It_Navigates_To_The_Select_Hotel_Page_And_Confirms_With_The_Checkbox()"
});
formatter.result({
  "duration": 170967851,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_Confirmation_By_Seleting_The_Continue_Button()"
});
formatter.result({
  "duration": 837813667,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user Selects The Confirmation Button An Book A Hotel Page Appears With The First Name Dialog Box To Enter In The Field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user Enter The Last Name In The Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Enter The Address In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Enter The Credit Card No In The Mentioned Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Enter The Credit Card Type In The Mentioned Field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Selects The Expiry Date Of Month And Year In The DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Enter The CVV Number In To The Field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Clicks On The Continue Button And It Navigates To the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Confirmation_Button_An_Book_A_Hotel_Page_Appears_With_The_First_Name_Dialog_Box_To_Enter_In_The_Field()"
});
formatter.result({
  "duration": 266687474,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Last_Name_In_The_Field()"
});
formatter.result({
  "duration": 216249378,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Address_In_The_Billing_Address_Field()"
});
formatter.result({
  "duration": 227119557,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_No_In_The_Mentioned_Field()"
});
formatter.result({
  "duration": 218574570,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_Type_In_The_Mentioned_Field()"
});
formatter.result({
  "duration": 209011145,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Expiry_Date_Of_Month_And_Year_In_The_DropDown()"
});
formatter.result({
  "duration": 881327505,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_CVV_Number_In_To_The_Field()"
});
formatter.result({
  "duration": 287476108,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.clicks_On_The_Continue_Button_And_It_Navigates_To_the_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 6241871742,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Clicks And Booking Confirmation Page Appears The User Can Check The Details Provided And Selects The My Itinerary Dialog Box And It Navigates To Booked Itinerary\tPage",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_And_Booking_Confirmation_Page_Appears_The_User_Can_Check_The_Details_Provided_And_Selects_The_My_Itinerary_Dialog_Box_And_It_Navigates_To_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 4851878185,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user Selected Options With the Booked Itinerary Page Appears With the Order Id And User Clicks On The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Selected_Options_With_the_Booked_Itinerary_Page_Appears_With_the_Order_Id_And_User_Clicks_On_The_Logout_Button()"
});
formatter.result({
  "duration": 3793081715,
  "status": "passed"
});
});