package com.skillstorm.taxprepsystembackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.taxprepsystembackend.models.NEC;

public interface NECRepository extends JpaRepository<NEC, Integer>{

    @Transactional
    public NEC getBySocial(int social);

    @Modifying
    @Transactional
    public void deleteAllBySocial(int social);
    
}
