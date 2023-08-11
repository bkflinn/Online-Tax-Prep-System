package com.skillstorm.taxprepsystembackend.repositories;

//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprepsystembackend.models.Result;

@Repository
public interface ResultRepository extends MongoRepository<Result, Integer>{

    //@Transactional
    public Result getBySocial(int social);

    //@Modifying
    //@Transactional
    public void deleteAllBySocial(int social);
    
}
