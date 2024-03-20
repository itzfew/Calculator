// Example Java code for handling user authentication
public class UserAuthentication {
    public boolean authenticate(String username, String password) {
        // Check username and password against database or hardcoded values
        if (username.equals("admin") && password.equals("password")) {
            return true;
        } else {
            return false;
        }
    }
}
