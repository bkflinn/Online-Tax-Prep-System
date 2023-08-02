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

import com.skillstorm.taxprepsystembackend.models.W2;
import com.skillstorm.taxprepsystembackend.services.W2Service;

@RestController
@RequestMapping("/W2s")
@CrossOrigin
public class W2Controller {

    @Autowired
    W2Service w2Service;

    @GetMapping
    public ResponseEntity<List<W2>> getAllW2s() {
        List<W2> W2s = w2Service.getAllW2s();

        return new ResponseEntity<List<W2>>(W2s, HttpStatus.OK);
    }

    @GetMapping("/W2/{social}")
    public ResponseEntity<W2> getW2BySocial(@PathVariable int social) {
        W2 w2 = w2Service.getW2BySocial(social);

        return new ResponseEntity<W2>(w2, HttpStatus.OK);
    }

    @PostMapping("/W2")
    public ResponseEntity<W2> createW2(@Valid @RequestBody W2 w2) {
        W2 newW2 = w2Service.saveW2(w2);

        return new ResponseEntity<W2>(newW2, HttpStatus.CREATED);
    }

    @PutMapping("/W2")
    public ResponseEntity<W2> updateW2(@Valid @RequestBody W2 w2) {
        W2 updatedW2 = w2Service.saveW2(w2);

        return new ResponseEntity<W2>(updatedW2, HttpStatus.OK);
    }

    @DeleteMapping("/W2")
    public ResponseEntity<W2> deleteW2(@RequestBody W2 w2) {
        w2Service.deleteW2(w2);
        return ResponseEntity.noContent().build();
    }
    
}
