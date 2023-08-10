package com.skillstorm.taxprepsystembackend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import com.skillstorm.taxprepsystembackend.models.User;
import com.skillstorm.taxprepsystembackend.services.UserService;

@Controller
@RequestMapping("/users")
@CrossOrigin(allowCredentials = "true", originPatterns = "http://localhost:5173")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    @ResponseBody
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();

        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping("/user/{social}")
    @ResponseBody
    public ResponseEntity<User> getUserBySocial(@PathVariable int social) {
        User user = userService.getUserBySocial(social);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("user/email/{email}")
    @ResponseBody
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        User user = userService.getUserByEmail(email);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/user")
    @ResponseBody
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User newUser = userService.saveUser(user);

        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/user")
    @ResponseBody
    public ResponseEntity<User> updateUser(@Valid @RequestBody User user) {
        User updatedUser = userService.saveUser(user);

        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/user")
    @ResponseBody
    public ResponseEntity<User> DeleteUser(@RequestBody User user) {
        userService.deleteUser(user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/signin")
    public RedirectView redirectView() {
        return new RedirectView("http://localhost:5173");
    }
    
}
