package com.feefo.jobtitlenormaliser;

public class Main {

    public static void main(String[] args) {
        Normaliser n = new Normaliser();
        n.loadTitlesFromFile("/titles.txt");

        String jobTitle = "Java engineer";
        System.out.println(jobTitle + " > " + n.normalise(jobTitle));

        jobTitle = "C# engineer";
        System.out.println(jobTitle + " > " + n.normalise(jobTitle));

        jobTitle = "Chief Accountant";
        System.out.println(jobTitle + " > " + n.normalise(jobTitle));

        jobTitle = "Accountant";
        System.out.println(jobTitle + " > " + n.normalise(jobTitle));
    }
}
