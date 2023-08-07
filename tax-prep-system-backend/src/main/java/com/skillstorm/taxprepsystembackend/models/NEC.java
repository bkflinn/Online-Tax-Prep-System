package com.skillstorm.taxprepsystembackend.models;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "NEC")
public class NEC {

    // _id used by MongoDB
    @Id
    private String _id;
    
    @Id
    private int social;

    private int payer_tin;
    private double compensation;

    public NEC() {
    }

    public NEC(int social, int payer_tin, double compensation, double fed_withheld) {
        this.social = social;
        this.payer_tin = payer_tin;
        this.compensation = compensation;
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

    public int getPayer_tin() {
        return payer_tin;
    }

    public void setPayer_tin(int payer_tin) {
        this.payer_tin = payer_tin;
    }

    public double getCompensation() {
        return compensation;
    }

    public void setCompensation(double compensation) {
        this.compensation = compensation;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + social;
        result = prime * result + payer_tin;
        long temp;
        temp = Double.doubleToLongBits(compensation);
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
        NEC other = (NEC) obj;
        if (social != other.social)
            return false;
        if (payer_tin != other.payer_tin)
            return false;
        if (Double.doubleToLongBits(compensation) != Double.doubleToLongBits(other.compensation))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Nec [social=" + social + ", payer_tin=" + payer_tin + ", compensation=" + compensation
                + "]";
    }
    
}
