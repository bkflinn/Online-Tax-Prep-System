package com.skillstorm.taxprepsystembackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprepsystembackend.models.W2;

public interface W2Repository extends JpaRepository<W2, Integer>{

    @Modifying
    @Transactional
    public void deleteAllBySocial(int social);
    
}
