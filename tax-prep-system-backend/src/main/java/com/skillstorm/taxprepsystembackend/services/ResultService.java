package com.skillstorm.taxprepsystembackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprepsystembackend.models.Result;
import com.skillstorm.taxprepsystembackend.repositories.ResultRepository;
import com.skillstorm.taxprepsystembackend.repositories.UserRepository;

@Service
public class ResultService {

    @Autowired
    ResultRepository resultRepository;

    @Autowired
    UserRepository userRepository;

    // retrieves all Results
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

    // retrieves the Result with the given social
    public Result getResultBySocial(int social) {
        return resultRepository.getBySocial(social);
    }

    // create new Result or update existing Result
    public Result saveResult(Result result) {
        
        // if the social associated with the Result exists in the user database
        if(userRepository.existsBySocial(result.getSocial())){
            return resultRepository.save(result);
        }
        else {
            return null;
        }
    }

    // delete existing Result
    public void deleteResult(Result result) {
        resultRepository.delete(result);
    }
    
}
