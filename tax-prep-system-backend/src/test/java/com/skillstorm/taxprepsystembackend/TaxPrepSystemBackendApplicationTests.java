package com.skillstorm.taxprepsystembackend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;

import com.skillstorm.taxprepsystembackend.models.User;
import com.skillstorm.taxprepsystembackend.services.UserService;

@SpringBootTest
class TaxPrepSystemBackendApplicationTests {

	@Autowired
	UserService userService;

	User user1;
	User user2;
	User user3;
	User newUser;
	User nullArgUser;

	@BeforeEach
	public void setupUsers() {
		user1 = new User(1, "Antoine", "Ivanikhin", "aivanikhin0@posterous.com", "646-741-6191", "81453 Sunnyside Crossing", "New York City", "NY", 10279, 'M');
		user2 = new User(2, "Hubie", "Chinnock", "hchinnock1@bloglines.com", "770-597-8961", "1 Thierer Parkway", "Duluth", "GA", 30026, 'S');
		user3 = new User(3, "Conrado", "Mettetal", "cmettetal2@scribd.com", "775-862-3604", "2344 Corry Junction", "Carson City", "NV", 89403, 'M');

		newUser = new User(20, "firstName", "lastName", "email", "555-555-5555", "123 Address Rd", "Indianapolis", "IN", 12345, 'S');
		nullArgUser = new User(30, null, null, null, null, null, null, null, 0, 'M');
	}

	@Test
	void contextLoads() {
	}

	// test get user
	@Test
	public void testGetUser() {
		// testing existing users
		assertEquals(userService.getUserBySocial(1), user1);
		assertEquals(userService.getUserBySocial(2), user2);
		assertEquals(userService.getUserBySocial(3), user3);

		// testing non-existent user
		assertEquals(userService.getUserBySocial(11), null);
	}

	// test create user
	@Test
	public void testCreateandUpdateUser() {
		// testing create invalid user with missing requirements
		assertThrows(DataIntegrityViolationException.class, () -> {
			userService.saveUser(nullArgUser);
		});

		// testing create valid user
		assertEquals(userService.saveUser(newUser), newUser);

		// testing update users
		assertEquals(userService.saveUser(user1), user1);
		assertEquals(userService.saveUser(user2), user2);
		assertEquals(userService.saveUser(user3), user3);
	}

	// test delete user
	@Test
	public void testDeleteUser() {
		// checks if user1 is in database
		assertTrue(userService.getAllUsers().contains(user1));

		// deletes user1 from database
		userService.deleteUser(user1);

		// checks if user1 is in database
		assertFalse(userService.getAllUsers().contains(user1));
	}

	@AfterEach
	public void teardownUsers() {
		user1 = null;
		user2 = null;
		user3 = null;

		nullArgUser = null;
		newUser = null;
	}

}
