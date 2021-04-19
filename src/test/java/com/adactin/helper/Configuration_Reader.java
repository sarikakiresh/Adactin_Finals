package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {
	
	public static Properties p;

	public Configuration_Reader() throws Throwable { // constructor

		File f = new File(
				"C:\\Users\\Sarika\\eclipse-workspace\\Adactin_FinalProject\\src\\test\\java\\com\\adactin\\feature\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		// Properties p = new Properties();//it is inside the constructor so to get conf
		// reader we are crretaing properties p outside the constructor

		p = new Properties();
		// load
		p.load(fis);// loading file in the property

	}

	public String getbrowser() {
		String browser = p.getProperty("browser");
		return browser;
	}

	public String geturl() {
		String url = p.getProperty("url");
		return url;
	}

	public String getcardnumber() {
		String cardnumber = p.getProperty("cardnumber");
		return cardnumber;
	}

	public String getCctype() {
		String Cctype = p.getProperty("Cctype");
		return Cctype;
	}

	public String Ccmonth() {
		String Ccmonth = p.getProperty("Ccmonth");
		return Ccmonth;
	}

	public String Ccyear() {
		String Ccyear = p.getProperty("Ccyear");
		return Ccyear;
	}

	public String cvv() {
		String cvv = p.getProperty("cvv");
		return cvv;
	}

}
