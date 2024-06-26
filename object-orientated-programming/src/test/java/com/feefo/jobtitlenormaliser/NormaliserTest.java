package com.feefo.jobtitlenormaliser;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NormaliserTest {

    private Normaliser normaliser;

    @BeforeEach
    public void init() {
        normaliser = new Normaliser();
        normaliser.add("Architect", "Software engineer", "Quantity surveyor", "Accountant");
    }
    @TestFactory
    Stream<DynamicTest> normalise() {
        record TestCase(String expected, String input, Normaliser normaliser) {
            public void check() {
                assertEquals(expected, normaliser.normalise(input));
            }
        }
        var testCases = new TestCase[]{
                // Happy path
                new TestCase("Software engineer", "Java engineer", normaliser),
                new TestCase("Software engineer", "C# engineer", normaliser),
                new TestCase("Accountant", "Chief Accountant", normaliser),
                new TestCase("Accountant", "Accountant", normaliser),

                // Unhappy path
                new TestCase("Plumber", "Plumber", normaliser),
        };

        return DynamicTest.stream(Stream.of(testCases), TestCase::input, TestCase::check);
    }
}
