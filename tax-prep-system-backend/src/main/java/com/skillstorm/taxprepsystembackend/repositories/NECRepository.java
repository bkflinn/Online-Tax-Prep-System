package com.skillstorm.taxprepsystembackend.repositories;

//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprepsystembackend.models.NEC;

@Repository
public interface NECRepository extends MongoRepository<NEC, Integer>{

    //@Transactional
    public NEC getBySocial(int social);

    //@Modifying
    //@Transactional
    public void deleteAllBySocial(int social);
    
}
