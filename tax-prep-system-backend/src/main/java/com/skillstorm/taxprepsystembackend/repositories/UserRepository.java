package com.skillstorm.taxprepsystembackend.repositories;

//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.skillstorm.taxprepsystembackend.models.User;
import java.util.List;


@Repository
public interface UserRepository extends MongoRepository<User, Integer>{

    //@Modifying
    //@Transactional
    public boolean existsBySocial(int social);

    //@Transactional
    public User getBySocial(int social);

    public User getByEmail(String email);
    
}
