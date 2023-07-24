package com.skillstorm.taxprepsystembackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprepsystembackend.models.User;
import com.skillstorm.taxprepsystembackend.repositories.NECRepository;
import com.skillstorm.taxprepsystembackend.repositories.ResultRepository;
import com.skillstorm.taxprepsystembackend.repositories.UserRepository;
import com.skillstorm.taxprepsystembackend.repositories.W2Repository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    W2Repository w2Repository;

    @Autowired
    NECRepository necRepository;

    @Autowired
    ResultRepository resultRepository;

    // retrieves all registered users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // retrieves the user with the given social
    public User getUserBySocial(int social) {
        return userRepository.getBySocial(social);
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
    
}
