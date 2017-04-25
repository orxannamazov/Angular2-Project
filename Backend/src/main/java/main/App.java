package main;

import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.post;

import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import utility.JsonTransformer;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import utility.DatabaseManager;

/**
 *  backend for Angular2.
 *
 */
public class App 
{

	static {
		enableCORS("*", "*", "*");
	}
	
    private static final String QUERY = "";

	private static final String AUTH_QUERY = "";
	static String musteriNum ="";
	
    public static void main( String[] args )
	{

		Gson gson = new Gson ();
		post("/session/create", (request, response) -> {

			Type type = new TypeToken<Map<String, String>>(){}.getType();
			Map<String, String> myMap = gson.fromJson(request.body(), type);

			String musteri_no = myMap.get("username"); 
			String password = myMap.get("password"); 


			System.out.println("Username: " + musteri_no + "\nPassword: " + password);

			if ( password.equalsIgnoreCase("1") &&  musteri_no.equalsIgnoreCase("1")) {
				
                musteriNum = musteri_no;
				System.out.println(musteri_no);
				response.status(200);
				response.type("application/json");
				return ("Success");
			}
			else{
				response.status(401);
				return "Failed";
			} 
		}, new JsonTransformer());


		get("/police", "application/json", (request, response) -> {
			String sendStaff = getQuery(musteriNum);

			return sendStaff;
		});
	}

	public static boolean checkUsername(String musteri_no, String password){
		boolean authenticated =false;

		try(Connection con = DatabaseManager.getConnection();
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery(AUTH_QUERY + musteri_no)){

			if (rs.next()) {
				authenticated = true;
			}
			else 
				authenticated = false;


		}catch (SQLException e) {
			e.printStackTrace();
		}

		if (authenticated && password.equalsIgnoreCase("1")) {
			return true;
		}
		else
			return false;
	}
	public static String getQuery(String mus_no){
		List<Pol_Police> list  = new ArrayList<Pol_Police>();
		String json = null;

		try (Connection con = DatabaseManager.getConnection();
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery(QUERY + mus_no)){

			int i = 0;

			while(rs.next()){

				Pol_Police police = new Pol_Police ();
                
				String no = rs.getString("no");
				String t_no = rs.getString("t_no"); // NUM
				String z_no = rs.getString("z_no");  // NUM

				police.setNo(no);
				police.setTecdit_no(t_no);
				police.setZeyil_no(z_no);
                
                /*
                 * All extra things are removed.
                 */


				if (i < 36){
					list.add(police);
				}
				i++;


			}

			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			Type type = new TypeToken<ArrayList<Pol_Police>>() {}.getType();

			json = gson.toJson(list);

			System.out.println(json);


		} catch (SQLException e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		return json;


	}

	private static void enableCORS(final String origin, final String methods, final String headers) {

		options("/*", (request, response) -> {

			String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
			if (accessControlRequestHeaders != null) {
				response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
			}

			String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
			if (accessControlRequestMethod != null) {
				response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
			}
			return "OK";
		});

		before((request, response) -> {
			response.header("Access-Control-Allow-Origin", origin);
			response.header("Access-Control-Request-Method", methods);
			response.header("Access-Control-Allow-Headers", headers);
			// Note: this may or may not be necessary in your particular application
			response.type("application/json");
		});
	}

}
