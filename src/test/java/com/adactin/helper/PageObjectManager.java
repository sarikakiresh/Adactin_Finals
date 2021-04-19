package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.Pom.Book_Hotelpage;
import com.Pom.Book_Itinerary;
import com.Pom.Booking_Confirmation;
import com.Pom.Check_Boxpage;
import com.Pom.Home_Page;
import com.Pom.Login_Page;

public class PageObjectManager {
	
	public WebDriver driver;// null

	private Login_Page login;
	private Home_Page Home;
	private Check_Boxpage checkbox;
	private Book_Hotelpage hotelpage;
	private Booking_Confirmation myitinerary;
	private Book_Itinerary logout;

	public PageObjectManager(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public Login_Page getInstanceLogin() {

		login = new Login_Page(driver);
		return login;
	}

	public Home_Page getInstanceHome() {
		Home = new Home_Page(driver);
		return Home;
	}

	public Check_Boxpage getInstancecheckbox() {
		checkbox = new Check_Boxpage(driver);
		return checkbox;
	}

	public Book_Hotelpage getInstancehotelpage() {
		hotelpage = new Book_Hotelpage(driver);
		return hotelpage;
	}

	public Booking_Confirmation getInstancemyitinerary() {
		myitinerary = new Booking_Confirmation(driver);
		return myitinerary;

	}

	public Book_Itinerary getInstancelogout() {
		logout = new Book_Itinerary(driver);
		return logout;
	}

}
