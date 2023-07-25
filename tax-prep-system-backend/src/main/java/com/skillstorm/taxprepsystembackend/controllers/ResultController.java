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

import com.skillstorm.taxprepsystembackend.models.Result;
import com.skillstorm.taxprepsystembackend.services.ResultService;

@RestController
@RequestMapping("/results")
@CrossOrigin
public class ResultController {

    @Autowired
    ResultService resultService;

    @GetMapping
    public ResponseEntity<List<Result>> getAllResults() {
        List<Result> results = resultService.getAllResults();

        return new ResponseEntity<List<Result>>(results, HttpStatus.OK);
    }

    @GetMapping("/result/{social}")
    public ResponseEntity<Result> getResultBySocial(@PathVariable int social) {
        Result result = resultService.getResultBySocial(social);

        return new ResponseEntity<Result>(result, HttpStatus.OK);
    }

    @PostMapping("/result")
    public ResponseEntity<Result> createResult(@Valid @RequestBody Result result) {
        Result newResult = resultService.saveResult(result);

        return new ResponseEntity<Result>(newResult, HttpStatus.CREATED);
    }

    @PutMapping("/result")
    public ResponseEntity<Result> updateResult(@Valid @RequestBody Result result) {
        Result updatedResult = resultService.saveResult(result);

        return new ResponseEntity<Result>(updatedResult, HttpStatus.OK);
    }

    @DeleteMapping("/result")
    public ResponseEntity<Result> deleteResult(@RequestBody Result result) {
        resultService.deleteResult(result);
        return ResponseEntity.noContent().build();
    }
    
}
