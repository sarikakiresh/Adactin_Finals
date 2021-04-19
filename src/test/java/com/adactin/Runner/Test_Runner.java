package com.adactin.Runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", glue = "com.adactin.stepdefinition",
monochrome=true,
dryRun=false,
strict=true,
tags=("@Smoketest, @Sanitytest"),
plugin= {"html:Report/HTML_Report",
		"pretty",
		"json:Reports/jsonReport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/Extentreport.html"
}
)
public class Test_Runner {
	
	public static WebDriver driver;//null

	@BeforeClass
	public static void set_up() throws Throwable {
		String browser = FileReaderManager.getInstance().getInstanceCR().getbrowser();
		driver = BaseClass.getBrowser(browser);
	}
   @AfterClass
	public static void tear_Down() {
		driver.close();
	}
	 
	

}
