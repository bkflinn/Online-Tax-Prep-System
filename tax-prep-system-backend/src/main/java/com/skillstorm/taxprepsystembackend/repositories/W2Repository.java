package com.skillstorm.taxprepsystembackend.repositories;

//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprepsystembackend.models.W2;

@Repository
public interface W2Repository extends MongoRepository<W2, Integer>{

    //@Transactional
    public W2 getBySocial(int social);

    //@Modifying
    //@Transactional
    public void deleteAllBySocial(int social);
    
}
