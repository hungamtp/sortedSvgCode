package com.company;

public class Account extends User{
    private int age;

    public Account(String name , int age) {
        super(name);
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
