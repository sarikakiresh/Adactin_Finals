package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.Runner.Test_Runner;
import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {
	
	public static WebDriver driver = Test_Runner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		String url = FileReaderManager.getInstance().getInstanceCR().geturl();
		getUrl(url);
		// getUrl("http://adactinhotelapp.com/");
	}

	@When("^user Enter The Username In \"([^\"]*)\" Field$")
	public void user_Enter_The_Username_In_Field(String Username) throws Throwable {
		inputvalueElement(pom.getInstanceLogin().getUsername(), Username);
	}

	@When("^user Enter The Password In \"([^\"]*)\" Field$")
	public void user_Enter_The_Password_In_Field(String Password) throws Throwable {
		inputvalueElement(pom.getInstanceLogin().getPassword(), Password);

	}

//	@When("^user Enter The Username In Username Field$")
//	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
//		inputvalueElement(pom.getInstanceLogin().getUsername(),"sarika14");
//
//	}
//
//	@When("^user Enter The Password In Password Field$")
//	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
//		inputvalueElement(pom.getInstanceLogin().getPassword(), "sarika@2014");
//
//	}

	@Then("^user Click On The Login Button And It Navigates To The Select Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		clickonelement(pom.getInstanceLogin().getLogin());

	}

	@When("^user Clicks The Page Navigates And There Is An Dropdown Option To Select The Location$")
	public void user_Clicks_The_Page_Navigates_And_There_Is_An_Dropdown_Option_To_Select_The_Location()
			throws Throwable {
		dropdown(pom.getInstanceHome().getLocation(), "byvalue", "Melbourne");

	}

	@When("^user Selects The Hotels In The Dropdown List$")
	public void user_Selects_The_Hotels_In_The_Dropdown_List() throws Throwable {
		dropdown(pom.getInstanceHome().getHotels(), "byvalue", "Hotel Cornice");

	}

	@When("^user Selects The Room Type According To The Requirement$")
	public void user_Selects_The_Room_Type_According_To_The_Requirement() throws Throwable {
		dropdown(pom.getInstanceHome().getRoomtype(), "byvalue", "Super Deluxe");

	}

	@When("^user Selects The Number Of Rooms Required$")
	public void user_Selects_The_Number_Of_Rooms_Required() throws Throwable {
		dropdown(pom.getInstanceHome().getRoomnos(), "byvalue", "4");

	}

	@When("^user Selects The Check In Date In The DropDown$")
	public void user_Selects_The_Check_In_Date_In_The_DropDown() throws Throwable {
		clear(pom.getInstanceHome().getDateinset());
		inputvalueElement(pom.getInstanceHome().getDateinset(), "20/01/2021");
	}

	@When("^user Selects The Check Out Date In The DropDown$")
	public void user_Selects_The_Check_Out_Date_In_The_DropDown() throws Throwable {
		clear(pom.getInstanceHome().getDateoutset());
		inputvalueElement(pom.getInstanceHome().getDateoutset(), "24/01/2021");
	}

	@When("^user Selects The Adults per Room Required$")
	public void user_Selects_The_Adults_per_Room_Required() throws Throwable {
		inputvalueElement(pom.getInstanceHome().getAdultsperroom(), "4");

	}

	@When("^user Selects The Children per Room Required$")
	public void user_Selects_The_Children_per_Room_Required() throws Throwable {
		inputvalueElement(pom.getInstanceHome().getChildrenperroom(), "4");

	}

	@Then("^user Clicks On The Search Button Followed By Selected All Options And It Navigates To The Select Hotel Page For The Confirmation$")
	public void user_Clicks_On_The_Search_Button_Followed_By_Selected_All_Options_And_It_Navigates_To_The_Select_Hotel_Page_For_The_Confirmation()
			throws Throwable {
		clickonelement(pom.getInstanceHome().getSubmit());

	}

	@When("^user Clicks It Navigates To The Select Hotel Page And Confirms With The Checkbox$")
	public void user_Clicks_It_Navigates_To_The_Select_Hotel_Page_And_Confirms_With_The_Checkbox() throws Throwable {
		clickonelement(pom.getInstancecheckbox().getCheck_box());

	}

	@Then("^user Clicks The Confirmation By Seleting The Continue Button$")
	public void user_Clicks_The_Confirmation_By_Seleting_The_Continue_Button() throws Throwable {
		clickonelement(pom.getInstancecheckbox().getSubmit());

	}

	@When("^user Selects The Confirmation Button An Book A Hotel Page Appears With The First Name Dialog Box To Enter In The Field$")
	public void user_Selects_The_Confirmation_Button_An_Book_A_Hotel_Page_Appears_With_The_First_Name_Dialog_Box_To_Enter_In_The_Field()
			throws Throwable {
		inputvalueElement(pom.getInstancehotelpage().getFirstname(), "Sarika");

	}

	@When("^user Enter The Last Name In The Field$")
	public void user_Enter_The_Last_Name_In_The_Field() throws Throwable {
		inputvalueElement(pom.getInstancehotelpage().getLastname(), "B");

	}

	@When("^user Enter The Address In The Billing Address Field$")
	public void user_Enter_The_Address_In_The_Billing_Address_Field() throws Throwable {
		inputvalueElement(pom.getInstancehotelpage().getAddress(), "12,midtown,california");

	}

	@When("^user Enter The Credit Card No In The Mentioned Field$")
	public void user_Enter_The_Credit_Card_No_In_The_Mentioned_Field() throws Throwable {
		inputvalueElement(pom.getInstancehotelpage().getCc(), "01234567890123456");

	}

	@When("^user Enter The Credit Card Type In The Mentioned Field$")
	public void user_Enter_The_Credit_Card_Type_In_The_Mentioned_Field() throws Throwable {
		dropdown(pom.getInstancehotelpage().getCctype(), "byvalue", "VISA");

	}

	@When("^user Selects The Expiry Date Of Month And Year In The DropDown$")
	public void user_Selects_The_Expiry_Date_Of_Month_And_Year_In_The_DropDown() throws Throwable {
		dropdown(pom.getInstancehotelpage().getCcmonth(), "byindex", "5");
		dropdown(pom.getInstancehotelpage().getCcyear(), "byvisibletext", "2017");

	}

	@When("^user Enter The CVV Number In To The Field$")
	public void user_Enter_The_CVV_Number_In_To_The_Field() throws Throwable {
		inputvalueElement(pom.getInstancehotelpage().getCvv(), "201");

	}

	@Then("^Clicks On The Continue Button And It Navigates To the Booking Confirmation Page$")
	public void clicks_On_The_Continue_Button_And_It_Navigates_To_the_Booking_Confirmation_Page() throws Throwable {
		// wait("booking.getBooknow");

		clickonelement(pom.getInstancehotelpage().getBooknow());
		thread();
		thread();
	}

	@Then("^user Clicks And Booking Confirmation Page Appears The User Can Check The Details Provided And Selects The My Itinerary Dialog Box And It Navigates To Booked Itinerary	Page$")
	public void user_Clicks_And_Booking_Confirmation_Page_Appears_The_User_Can_Check_The_Details_Provided_And_Selects_The_My_Itinerary_Dialog_Box_And_It_Navigates_To_Booked_Itinerary_Page()
			throws Throwable {
		// wait("confirm.getMyitinerary");
		clickonelement(pom.getInstancemyitinerary().getMyitinerary());
		thread();

	}

	@Then("^user Selected Options With the Booked Itinerary Page Appears With the Order Id And User Clicks On The Logout Button$")
	public void user_Selected_Options_With_the_Booked_Itinerary_Page_Appears_With_the_Order_Id_And_User_Clicks_On_The_Logout_Button()
			throws Throwable {

		thread();
		clickonelement(pom.getInstancelogout().getLogout());

	}

}
