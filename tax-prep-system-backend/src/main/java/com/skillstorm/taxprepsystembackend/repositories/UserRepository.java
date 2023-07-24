package com.skillstorm.taxprepsystembackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprepsystembackend.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{

    @Modifying
    @Transactional
    public boolean existsBySocial(int social);

    @Transactional
    public User getBySocial(int social);
    
}
