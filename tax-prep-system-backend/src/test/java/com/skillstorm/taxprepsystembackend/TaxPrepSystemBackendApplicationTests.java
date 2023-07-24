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
import com.skillstorm.taxprepsystembackend.models.W2;
import com.skillstorm.taxprepsystembackend.services.UserService;
import com.skillstorm.taxprepsystembackend.services.W2Service;

@SpringBootTest
class TaxPrepSystemBackendApplicationTests {

	@Autowired
	UserService userService;

	@Autowired
	W2Service w2Service;

	User user1;
	User user2;
	User user3;
	User newUser;
	User nullArgUser;

	W2 user1W2;
	W2 user2W2;
	W2 user3W2;
	W2 newUserW2;

	@BeforeEach
	public void setup() {

		// users
		user1 = new User(1, "Antoine", "Ivanikhin", "aivanikhin0@posterous.com", "646-741-6191", "81453 Sunnyside Crossing", "New York City", "NY", 10279, 'M');
		user2 = new User(2, "Hubie", "Chinnock", "hchinnock1@bloglines.com", "770-597-8961", "1 Thierer Parkway", "Duluth", "GA", 30026, 'S');
		user3 = new User(3, "Conrado", "Mettetal", "cmettetal2@scribd.com", "775-862-3604", "2344 Corry Junction", "Carson City", "NV", 89403, 'M');
		newUser = new User(20, "firstName", "lastName", "email", "555-555-5555", "123 Address Rd", "Indianapolis", "IN", 12345, 'S');
		nullArgUser = new User(30, null, null, null, null, null, null, null, 0, 'M');

		// W2s
		user1W2 = new W2(1, 324029631, "Rhycero", 1000.00, 1000.00);
		user2W2 = new W2(2, 274634782, "Muxo", 2000.00, 2000.00);
		user3W2 = new W2(3, 451788361, "Chatterpoint", 3000.00, 3000.00);
		newUserW2 = new W2(20, 451788361, "Chatterpoint", 3000.00, 3000.00);
		
	}

	@Test
	void contextLoads() {
	}

	// test get user, W2, NEC, and result
	@Test
	public void testGet() {
		// testing existing users
		assertEquals(userService.getUserBySocial(1), user1);
		assertEquals(userService.getUserBySocial(2), user2);
		assertEquals(userService.getUserBySocial(3), user3);

		// testing non-existent user
		assertEquals(userService.getUserBySocial(11), null);

		// testing existing W2s
		assertEquals(w2Service.getW2BySocial(1), user1W2);
		assertEquals(w2Service.getW2BySocial(2), user2W2);
		assertEquals(w2Service.getW2BySocial(3), user3W2);

		// testing non-existent W2
		assertEquals(w2Service.getW2BySocial(11), null);
	}

	// test create and update user, W2, NEC, and result
	@Test
	public void testCreateandUpdate() {
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

		// testing create valid W2
		assertEquals(w2Service.saveW2(newUserW2), newUserW2);

		// testing update W2s
		assertEquals(w2Service.saveW2(user1W2), user1W2);
		assertEquals(w2Service.saveW2(user2W2), user2W2);
		assertEquals(w2Service.saveW2(user3W2), user3W2);

	}

	// test delete user, W2, NEC, and result
	@Test
	public void testDelete() {
		// checks if user1 is in database
		assertTrue(userService.getAllUsers().contains(user1));
		// deletes user1 from database
		userService.deleteUser(user1);
		// checks if user1 is in database
		assertFalse(userService.getAllUsers().contains(user1));

		// checks if user2W2 is in database
		assertTrue(w2Service.getAllW2s().contains(user2W2));
		// deletes user1W2 from database
		w2Service.deleteW2(user2W2);
		// checks if user2W2 is in database
		assertFalse(w2Service.getAllW2s().contains(user2W2));
	}

	@AfterEach
	public void teardown() {

		// users
		user1 = null;
		user2 = null;
		user3 = null;
		nullArgUser = null;
		newUser = null;

		// W2s
		user1W2 = null;
		user2W2 = null;
		user3W2 = null;
	}

}
