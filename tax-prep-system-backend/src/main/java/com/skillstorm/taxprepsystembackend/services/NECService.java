package com.skillstorm.taxprepsystembackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxprepsystembackend.models.NEC;
import com.skillstorm.taxprepsystembackend.repositories.NECRepository;
import com.skillstorm.taxprepsystembackend.repositories.UserRepository;

@Service
public class NECService {

    @Autowired
    NECRepository necRepository;

    @Autowired
    UserRepository userRepository;

    // retrieves all NECs
    public List<NEC> getAllNECs() {
        return necRepository.findAll();
    }

    // retrieves the NEC with the given social
    public NEC getNECBySocial(int social) {
        return necRepository.getBySocial(social);
    }

    // create new NEC or update existing NEC
    public NEC saveNEC(NEC nec) {
        
        // if the social associated with the NEC exists in the user database
        if(userRepository.existsBySocial(nec.getSocial())){
            return necRepository.save(nec);
        }
        else {
            return null;
        }
    }

    // delete existing NEC
    public void deleteNEC(NEC nec) {
        necRepository.delete(nec);
    }
    
}
