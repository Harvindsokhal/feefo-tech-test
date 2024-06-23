package com.feefo.jobtitlenormaliser;

import java.util.ArrayList;
import java.util.List;

public class Normaliser {
    private final List<String> titles;

    public Normaliser() {
        titles = new ArrayList<>();
        titles.add("Architect");
        titles.add("Software engineer");
        titles.add("Quantity surveyor");
        titles.add("Accountant");
    }

    public String normalise(String inputTitle) {
        String bestMatch = "";
        double highestScore = 0.0;

        for (String title : titles) {
            double score = getSimilarityScore(inputTitle, title);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = title;
            }
        }

        return bestMatch;
    }

    private double getSimilarityScore(String inputTitle, String title) {
        String[] inputWords = inputTitle.toLowerCase().split("\\s+");
        String[] titleWords = title.toLowerCase().split("\\s+");
        int matches = 0;

        for (String inputWord : inputWords) {
            for (String titleWord : titleWords) {
                if (inputWord.equals(titleWord)) {
                    matches++;
                }
            }
        }
        return (double) matches / titleWords.length;
    }
}

