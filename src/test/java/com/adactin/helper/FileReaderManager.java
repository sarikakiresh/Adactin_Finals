package com.adactin.helper;

public class FileReaderManager {
	
	public static FileReaderManager getInstance() { // changing static to call in test_runner

		FileReaderManager helper = new FileReaderManager();
		
		return helper;
	}

	
	public Configuration_Reader getInstanceCR() throws Throwable { // frst this method to call getinstance are using
																	// filereader helper

		Configuration_Reader reader = new Configuration_Reader();
		
		return reader;
	}

}
