Feature: Hotel Booking In Adactin Application

@Smoketest
Scenario Outline: User Login The Application

Given user Launch The Application
When user Enter The Username In "<Username>" Field
And user Enter The Password In "<Password>" Field
Then user Click On The Login Button And It Navigates To The Select Hotel Page

Examples:
|Username|Password|
|SSS|456|
|KKK|789|
|sarika14|sarika@2014|

@Sanitytest
Scenario: User select The Details

When user Clicks The Page Navigates And There Is An Dropdown Option To Select The Location
And user Selects The Hotels In The Dropdown List
And user Selects The Room Type According To The Requirement 
And user Selects The Number Of Rooms Required
And user Selects The Check In Date In The DropDown 
And user Selects The Check Out Date In The DropDown
And user Selects The Adults per Room Required
And user Selects The Children per Room Required
Then user Clicks On The Search Button Followed By Selected All Options And It Navigates To The Select Hotel Page For The Confirmation 

@Sanitytest
Scenario: 

When user Clicks It Navigates To The Select Hotel Page And Confirms With The Checkbox
Then user Clicks The Confirmation By Seleting The Continue Button

@Sanitytest
Scenario: 

When user Selects The Confirmation Button An Book A Hotel Page Appears With The First Name Dialog Box To Enter In The Field
And user Enter The Last Name In The Field
And user Enter The Address In The Billing Address Field
And user Enter The Credit Card No In The Mentioned Field
And user Enter The Credit Card Type In The Mentioned Field
And user Selects The Expiry Date Of Month And Year In The DropDown 
And user Enter The CVV Number In To The Field
Then Clicks On The Continue Button And It Navigates To the Booking Confirmation Page

@Sanitytest
Scenario: 
Then user Clicks And Booking Confirmation Page Appears The User Can Check The Details Provided And Selects The My Itinerary Dialog Box And It Navigates To Booked Itinerary	Page

@Smoketest
Scenario:
Then user Selected Options With the Booked Itinerary Page Appears With the Order Id And User Clicks On The Logout Button

