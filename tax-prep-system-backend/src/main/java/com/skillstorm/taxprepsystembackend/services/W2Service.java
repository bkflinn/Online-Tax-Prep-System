package com.skillstorm.taxprepsystembackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprepsystembackend.models.W2;
import com.skillstorm.taxprepsystembackend.repositories.UserRepository;
import com.skillstorm.taxprepsystembackend.repositories.W2Repository;

@Service
public class W2Service {

    @Autowired
    W2Repository w2Repository;

    @Autowired
    UserRepository userRepository;

    // retrieves all W2s
    public List<W2> getAllW2s() {
        return w2Repository.findAll();
    }

    // retrieves the W2 with the given social
    public W2 getW2BySocial(int social) {
        return w2Repository.getBySocial(social);
    }

    // create new W2 or update existing W2
    public W2 saveW2(W2 w2) {
        
        // if the social associated with the W2 exists in the user database
        if(userRepository.existsBySocial(w2.getSocial())){
            return w2Repository.save(w2);
        }
        else {
            return null;
        }
    }

    // delete existing W2
    public void deleteW2(W2 w2) {
        w2Repository.delete(w2);
    }
    
}
