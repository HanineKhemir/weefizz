import 'dart:convert';
import 'package:http/http.dart' as http;

class AuthService {
  final String baseUrl = 'http://10.0.2.2:3000';

  String? accessToken;
  String? refreshToken;
  bool connected = false;

  Future<void> signUp(String email, String password) async {
    final url = Uri.parse('$baseUrl/auth/signup');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );

    if (response.statusCode == 201 || response.statusCode == 200) {
      print('Signup successful: ${response.body}');
    } else {
      print('Signup failed: ${response.statusCode}, ${response.body}');
    }
  }

  Future<void> login(String email, String password) async {
    final url = Uri.parse('$baseUrl/auth');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      accessToken = data['access_token'];
      refreshToken = data['refresh_token'];
      connected = true;

      print('Login successful');
      print('Access token: $accessToken');
      print('Refresh token: $refreshToken');
    } else {
      connected = false;
      print('Login failed: ${response.statusCode}, ${response.body}');
    }
  }
}
