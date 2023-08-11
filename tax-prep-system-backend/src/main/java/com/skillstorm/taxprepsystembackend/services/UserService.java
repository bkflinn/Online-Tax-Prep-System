package com.skillstorm.taxprepsystembackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprepsystembackend.models.User;
import com.skillstorm.taxprepsystembackend.repositories.NECRepository;
import com.skillstorm.taxprepsystembackend.repositories.ResultRepository;
import com.skillstorm.taxprepsystembackend.repositories.UserRepository;
import com.skillstorm.taxprepsystembackend.repositories.W2Repository;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    W2Repository w2Repository;

    @Autowired
    NECRepository necRepository;

    @Autowired
    ResultRepository resultRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    // retrieves all registered users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // retrieves the user with the given social
    public User getUserBySocial(int social) {
        return userRepository.getBySocial(social);
    }

    // retrieves the user with the given email
    public User getUserByEmail(String email) {
        return userRepository.getByEmail(email);
    }

    // create new user or update existing user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // delete existing user
    // must delete associated entries in W2, NEC, and results as well
    public void deleteUser(User user) {
        w2Repository.deleteAllBySocial(user.getSocial());
        necRepository.deleteAllBySocial(user.getSocial());
        resultRepository.deleteAllBySocial(user.getSocial());
        userRepository.delete(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found."));

        return user;
    }

    public void register(User user) {

        // first we need to check if the username is taken
        Optional<User> foundUser = userRepository.findByEmail(user.getEmail());
        if(foundUser.isPresent()) {
            
            // [insert some logic to tell fronted that the username already exists]

            throw new RuntimeException("User with that username already exists.");
        }

        /**
         * next we need to ENCODE the user's password
         *      spring security is expecting you to use BCrypt
         *          - otherwise error: "Password doesn't look like BCrypt"
         */
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // finally save to db
        userRepository.save(user);

    }
    
}
