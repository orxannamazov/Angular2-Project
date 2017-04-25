
package utility;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * @author Orxan
 *
 */
public class DatabaseManager {

	private Statement statement;
	
	public Statement getStatement() {
		return statement;
	}
	
	
	public static Connection getConnection() {
		Properties props = new Properties();
		Connection connection = null;
		FileInputStream fis = null;
		
		
		try {
			fis = new FileInputStream("src/main/java/properties/db.properties");
			props.load(fis);			

			Class.forName(props.getProperty("DB_DRIVER_CLASS"));
			
			connection = DriverManager.getConnection ( props.getProperty("DB_URL"), 
													props.getProperty("DB_USERNAME"), 
													props.getProperty("DB_PASSWORD") );
			
			
		} catch (IOException | ClassNotFoundException | SQLException  e) {
			e.printStackTrace();
		}
		
		System.out.println("Oracle JDBC Driver Registered!");
		
		return connection;
	}



}
