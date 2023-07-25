package com.skillstorm.taxprepsystembackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprepsystembackend.models.Result;

public interface ResultRepository extends JpaRepository<Result, Integer>{

    @Transactional
    public Result getBySocial(int social);

    @Modifying
    @Transactional
    public void deleteAllBySocial(int social);
    
}
