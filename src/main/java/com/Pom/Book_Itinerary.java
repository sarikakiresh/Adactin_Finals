package com.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Book_Itinerary {
	
	@FindBy(xpath = "//input[@name='logout']")
	private WebElement logout;
	
	public WebDriver driver;

	public Book_Itinerary(WebDriver driverF) {
		this.driver = driverF;
		PageFactory.initElements(driver, this);
	}

	public WebElement getLogout() {
		return logout;
	}

}
