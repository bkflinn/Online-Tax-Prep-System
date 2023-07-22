package com.skillstorm.taxprepsystembackend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "RESULTS")
public class Result {
    
    @Id
    @JoinColumn
    private int social;

    @Column
    private double owed;

    public Result() {
    }

    public Result(int social, double owed) {
        this.social = social;
        this.owed = owed;
    }

    public int getSocial() {
        return social;
    }

    public void setSocial(int social) {
        this.social = social;
    }

    public double getOwed() {
        return owed;
    }

    public void setOwed(double owed) {
        this.owed = owed;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + social;
        long temp;
        temp = Double.doubleToLongBits(owed);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Result other = (Result) obj;
        if (social != other.social)
            return false;
        if (Double.doubleToLongBits(owed) != Double.doubleToLongBits(other.owed))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Result [social=" + social + ", owed=" + owed + "]";
    }

}
