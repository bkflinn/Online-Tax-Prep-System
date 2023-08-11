package com.skillstorm.taxprepsystembackend.models;

import org.springframework.data.annotation.Id;

//import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "W2")
public class W2 {

    // _id used by MongoDB
    @Id
    private String _id;
    
    private int social;

    private int emp_tin;
    private String employer;
    private double wages;
    private double fed_withheld;

    public W2() {
    }

    public W2(int social, int emp_tin, String employer, double wages, double fed_withheld) {
        this.social = social;
        this.emp_tin = emp_tin;
        this.employer = employer;
        this.wages = wages;
        this.fed_withheld = fed_withheld;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public int getSocial() {
        return social;
    }

    public void setSocial(int social) {
        this.social = social;
    }

    public int getEmp_tin() {
        return emp_tin;
    }

    public void setEmp_tin(int emp_tin) {
        this.emp_tin = emp_tin;
    }

    public String getEmployer() {
        return employer;
    }

    public void setEmployer(String employer) {
        this.employer = employer;
    }

    public double getWages() {
        return wages;
    }

    public void setWages(double wages) {
        this.wages = wages;
    }

    public double getFed_withheld() {
        return fed_withheld;
    }

    public void setFed_withheld(double fed_withheld) {
        this.fed_withheld = fed_withheld;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + social;
        result = prime * result + emp_tin;
        result = prime * result + ((employer == null) ? 0 : employer.hashCode());
        long temp;
        temp = Double.doubleToLongBits(wages);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(fed_withheld);
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
        W2 other = (W2) obj;
        if (social != other.social)
            return false;
        if (emp_tin != other.emp_tin)
            return false;
        if (employer == null) {
            if (other.employer != null)
                return false;
        } else if (!employer.equals(other.employer))
            return false;
        if (Double.doubleToLongBits(wages) != Double.doubleToLongBits(other.wages))
            return false;
        if (Double.doubleToLongBits(fed_withheld) != Double.doubleToLongBits(other.fed_withheld))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "W2 [social=" + social + ", emp_tin=" + emp_tin + ", employer=" + employer + ", wages=" + wages
                + ", fed_withheld=" + fed_withheld + "]";
    }

}
