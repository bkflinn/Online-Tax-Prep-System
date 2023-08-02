package com.skillstorm.taxprepsystembackend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.taxprepsystembackend.models.NEC;
import com.skillstorm.taxprepsystembackend.services.NECService;

@RestController
@RequestMapping("/NECs")
@CrossOrigin
public class NECController {

    @Autowired
    NECService necService;

    @GetMapping
    public ResponseEntity<List<NEC>> getAllNECs() {
        List<NEC> NECs = necService.getAllNECs();

        return new ResponseEntity<List<NEC>>(NECs, HttpStatus.OK);
    }

    @GetMapping("/NEC/{social}")
    public ResponseEntity<NEC> getNECBySocial(@PathVariable int social) {
        NEC nec = necService.getNECBySocial(social);

        return new ResponseEntity<NEC>(nec, HttpStatus.OK);
    }

    @PostMapping("/NEC")
    public ResponseEntity<NEC> createNEC(@Valid @RequestBody NEC nec) {
        NEC newNEC = necService.saveNEC(nec);

        return new ResponseEntity<NEC>(newNEC, HttpStatus.CREATED);
    }

    @PutMapping("/NEC")
    public ResponseEntity<NEC> updateNEC(@Valid @RequestBody NEC nec) {
        NEC updatedNEC = necService.saveNEC(nec);

        return new ResponseEntity<NEC>(updatedNEC, HttpStatus.OK);
    }

    @DeleteMapping("/NEC")
    public ResponseEntity<NEC> deleteNEC(@RequestBody NEC nec) {
        necService.deleteNEC(nec);
        return ResponseEntity.noContent().build();
    }
    
}
