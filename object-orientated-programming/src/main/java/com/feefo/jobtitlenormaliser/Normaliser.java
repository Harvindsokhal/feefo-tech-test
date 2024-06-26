package com.feefo.jobtitlenormaliser;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Normaliser {
    private final List<String> titles;

    private static final Logger logger = Logger.getLogger(Normaliser.class.getName());

    public Normaliser() {
        titles = new ArrayList<>();
    }

    public void add(String... titles) {
        this.titles.addAll(Arrays.asList(titles));
    }

    public void loadTitlesFromFile(String fileName) {
        try {
            var stream = this.getClass().getResourceAsStream(fileName);
            if (stream == null) {
                logger.log(Level.WARNING, "Unable to open titles file.");
                return;
            }
            var isr = new InputStreamReader(stream);
            var br = new BufferedReader(isr);
            String line;

            while((line = br.readLine()) != null) {
                this.add(line);
            }
        } catch(IOException e) {
           logger.log(Level.WARNING, "Failed to read titles.", e);
        }
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

        return bestMatch.isEmpty() ? inputTitle : bestMatch;
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

