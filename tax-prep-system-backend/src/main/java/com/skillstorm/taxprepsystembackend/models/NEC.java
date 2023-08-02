package com.skillstorm.taxprepsystembackend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table
public class NEC {
    
    @Id
    @JoinColumn
    private int social;

    @Column
    private int payer_tin;

    @Column
    private double compensation;

    @Column
    private double fed_withheld;

    public NEC() {
    }

    public NEC(int social, int payer_tin, double compensation, double fed_withheld) {
        this.social = social;
        this.payer_tin = payer_tin;
        this.compensation = compensation;
        this.fed_withheld = fed_withheld;
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
        result = prime * result + payer_tin;
        long temp;
        temp = Double.doubleToLongBits(compensation);
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
        NEC other = (NEC) obj;
        if (social != other.social)
            return false;
        if (payer_tin != other.payer_tin)
            return false;
        if (Double.doubleToLongBits(compensation) != Double.doubleToLongBits(other.compensation))
            return false;
        if (Double.doubleToLongBits(fed_withheld) != Double.doubleToLongBits(other.fed_withheld))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Nec [social=" + social + ", payer_tin=" + payer_tin + ", compensation=" + compensation
                + ", fed_withheld=" + fed_withheld + "]";
    }
    
}
