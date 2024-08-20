import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import { shuffleArray } from "./utils";

// List of questions
const allQuestions = [
  {
    questionText: "What is the capital of Japan?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    questionText: "Which river is the longest in the world?",
    options: ["Amazon", "Mississippi", "Nile", "Yangtze"],
    correctAnswer: "Nile",
  },
  {
    questionText: "What gas is used to extinguish fires?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correctAnswer: "Carbon dioxide",
  },
  {
    questionText: "What animal is the national symbol of Australia?",
    options: ["Kangaroo", "Koala", "Emu", "Crocodile"],
    correctAnswer: "Kangaroo",
  },
  {
    questionText: "Which of the following planets is not a gas giant?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: "Mars",
  },
  {
    questionText: "What is the name of the process by which plants convert sunlight into energy?",
    options: ["Respiration", "Photosynthesis", "Oxidation", "Evolution"],
    correctAnswer: "Photosynthesis",
  },
  {
    questionText: "What chemical element is designated as 'Hg'?",
    options: ["Silver", "Tin", "Copper", "Mercury"],
    correctAnswer: "Mercury",
  },
  {
    questionText: "In what year was the first international modern Olympiad held?",
    options: ["1896", "1900", "1912", "1924"],
    correctAnswer: "1896",
  },
  {
    questionText: "For which of these disciplines Nobel Prize is awarded?",
    options: ["Physics, Chemistry", "Physiology", "Medicine", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    questionText: "Entomology is the science that studies:",
    options: ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],
    correctAnswer: "Insects",
  },
  {
    questionText: "Hitler's party is known as:",
    options: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
    correctAnswer: "Nazi Party",
  },
  {
    questionText: "For which Galileo is famous?",
    options: ["Developed the telescope", "Discovered four satellites of Jupiter", "Found that the swinging motion of the pendulum results in consistent time measurement.", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    questionText: "When the First Afghan War took place in",
    options: ["1839", "1843", "1833", "1848"],
    correctAnswer: "1839",
  },
  {
    questionText: "Ecology deals with",
    options: ["Birds", "Cell formation", "Relation between organisms and their environment", "Tissues"],
    correctAnswer: "Relation between organisms and their environment",
  },
  {
    questionText: "Which is the largest island?",
    options: ["New Guinea", "Andaman Nicobar", "Greenland", "Hawaii"],
    correctAnswer: "Greenland",
  },
  {
    questionText: "Which one is the hottest continent?",
    options: ["Africa", "South Asia", "North America", "Australia"],
    correctAnswer: "Africa",
  },
  {
    questionText: "What do Koalas usually eat?",
    options: ["Bamboo", "Eucalyptus", "Aloe Vera", "Banana"],
    correctAnswer: "Eucalyptus",
  },
  {
    questionText: "What is the most popular bread in France?",
    options: ["Brioche", "Baguette", "White bread", "Ciabatta"],
    correctAnswer: "Baguette",
  },
  {
    questionText: "What is the official currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Dollars"],
    correctAnswer: "Yen",
  },
  {
    questionText: "What is the phobia of thunder and rain?",
    options: ["Agoraphobia", "Ombrophobia", "Acrophobia", "Claustrophobia"],
    correctAnswer: "Ombrophobia",
  },
  {
    questionText: "What does Carpe Diem mean in Latin?",
    options: ["Enjoy the moment", "Have no fear", "Sorry I blew it", "Hello"],
    correctAnswer: "Enjoy the moment",
  },
  {
    questionText: "Which one of the following countries is not in Africa?",
    options: ["Morocco", "Yemen", "Sudan", "Algeria"],
    correctAnswer: "Yemen",
  },
  {
    questionText: "What is considered the lung of the Earth?",
    options: ["Amazon rainforest", "The Mississippi River", "The Sahara", "Everest"],
    correctAnswer: "Amazon rainforest",
  },
  {
    questionText: "Where does the Sushi come from?",
    options: ["Japan", "China", "America", "South Korea"],
    correctAnswer: "Japan",
  },
  {
    questionText: "In which century was the Mona Lisa painted?",
    options: ["18th century", "15th century", "16th century", "14th century"],
    correctAnswer: "16th century",
  },
  {
    questionText: "Who wrote the 'Great Gatsby' novel?",
    options: ["Leo Tolstoy", "Hemingway", "Stephen King", "F. Scott Fitzgerald"],
    correctAnswer: "F. Scott Fitzgerald",
  },
  {
    questionText: "Which is the richest country in the world?",
    options: ["Qatar", "Russia", "The USA", "The UAE"],
    correctAnswer: "Qatar",
  },
  {
    questionText: "Which country is the biggest grower of coffee?",
    options: ["Spain", "India", "Ethiopia", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    questionText: "How many bones are in the body of an adult human?",
    options: ["330", "206", "250", "210"],
    correctAnswer: "206",
  },
  {
    questionText: "When do humans use more facial muscles?",
    options: ["While smiling", "While frowning", "While sleeping", "While talking"],
    correctAnswer: "While frowning",
  },
  {
    questionText: "Who wrote 'Crime and Punishment'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
    correctAnswer: "Fyodor Dostoevsky",
  },
  {
    questionText: "In what year was the United Nations (UN) founded?",
    options: ["1945", "1919", "1956", "1961"],
    correctAnswer: "1945",
  },
  {
    questionText: "Which city is called the 'City of Winds'?",
    options: ["Chicago", "Seattle", "Washington", "Veliky Novgorod"],
    correctAnswer: "Chicago",
  },
  {
    questionText: "What animal is a symbol of peace and neutrality?",
    options: ["Polar bear", "White tiger", "White lion", "White crane"],
    correctAnswer: "White crane",
  },
  {
    questionText: "What element is the main constituent of diamonds?",
    options: ["Carbon", "Oxygen", "Silver", "Gold"],
    correctAnswer: "Carbon",
  },
  {
    questionText: "In what year was Ferdinand Magellan's first successful circumnavigation of the world?",
    options: ["1492", "1520", "1588", "1620"],
    correctAnswer: "1520",
  },
  {
    questionText: "Which river is the second longest in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
    correctAnswer: "Yangtze",
  },
  {
    questionText: "What year was the first man sent to space?",
    options: ["1957", "1961", "1969", "1975"],
    correctAnswer: "1961",
  },
  {
    questionText: "Which sea is considered the most salty on Earth?",
    options: ["Red Sea", "Mediterranean Sea", "Dead Sea", "Black Sea"],
    correctAnswer: "Dead Sea",
  },
  {
    questionText: "Which organ in the human body is responsible for the secretion of bile?",
    options: ["Liver", "Kidneys", "Spleen", "Stomach"],
    correctAnswer: "Liver",
  },
  {
    questionText: "Which planet in the solar system is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    questionText: "What chemical element is designated as 'Cu'?",
    options: ["Zinc", "Copper", "Cobalt", "Kurtz"],
    correctAnswer: "Copper",
  },
  {
    questionText: "In what year did the French Revolution take place?",
    options: ["1789", "1812", "1905", "1793"],
    correctAnswer: "1789",
  },
  {
    questionText: "What ocean is between Africa and Australia?",
    options: ["Pacific", "Indian", "Atlantic", "Arctic"],
    correctAnswer: "Indian",
  },
  {
    questionText: "Which chemical element makes up most of the atmosphere of Mars?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon dioxide",
  },
  {
    questionText: "What chemical element makes up most of the atmosphere of Titan?",
    options: ["Methane", "Carbon dioxide", "Hydrogen", "Oxygen"],
    correctAnswer: "Methane",
  },
  {
    questionText: "In what year did the discovery of Antarctica occur?",
    options: ["1500", "1778", "1820", "1892"],
    correctAnswer: "1820",
  },
  {
    questionText: "In what year was the International Red Cross and Red Crescent Movement (Red Cross) founded?",
    options: ["1863", "1901", "1945", "1980"],
    correctAnswer: "1863",
  },
  {
    questionText: "What instrument is depicted in Leonardo da Vinci's famous painting 'The Last Supper'?",
    options: ["Tablets", "Lute", "Guitar", "Harp"],
    correctAnswer: "Lute",
  },
  {
    questionText: "In which country did the Chernobyl nuclear disaster take place?",
    options: ["Russia", "Ukraine", "Belarus", "Lithuania"],
    correctAnswer: "Ukraine",
  },
  {
    questionText: "What ocean lies between North America and Eurasia?",
    options: ["Quiet", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Atlantic",
  },
  {
    questionText: "In what year was the Magna Carta signed?",
    options: ["1066", "1215", "1492", "1689"],
    correctAnswer: "1215",
  },
  {
    questionText: "What chemical element is used to cool and freeze food?",
    options: ["Sodium", "Hydrogen", "Oxygen", "Nitrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    questionText: "Which country is famous for its pyramids and the Sphinx?",
    options: ["India", "China", "Mexico", "Egypt"],
    correctAnswer: "Egypt",
  },
  {
    questionText: "What is the name of the science that studies the past of life on Earth?",
    options: ["Palaeontology", "Astronomy", "Anthropology", "Geology"],
    correctAnswer: "Palaeontology",
  },
  {
    questionText: "What chemical element forms the basis of the haemoglobin molecule responsible for the transport of oxygen in the blood?",
    options: ["Nitrogen", "Iron", "Oxygen", "Silver"],
    correctAnswer: "Iron",
  },
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    questionText: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
  {
    questionText: "What is the smallest planet in our solar system?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: "Mercury",
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    options: ["Sulphur","Osmium","Oxygen","Palladium"],
    correctAnswer: "Oxygen",
  },
  {
    questionText: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    questionText: "Who is the writer of novel 1984?",
    options: ["Holly Jackness", "Maxwell Hasting", "Adam Silvera", "George Orwell"],
    correctAnswer: "George Orwell",
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    questionText: "What is the sanskrit name of Holy Basil?",
    options: ["Tulsi", "Dubo", "Ajamoda", "Thumba"],
    correctAnswer: "Tulsi",
  },
  {
    questionText: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Baikal", "Lake Superior", "Ontario"],
    correctAnswer: "Baikal",
  },
  {
    questionText: "Who wrote the novel “War and Peace”?",
    options: ["Anton Chekhov",
      "Fyodor Dostoevsky",
      "Leo Tolstoy",
    "Ivan Turgenev"],
    correctAnswer: "Leo Tolstoy",
  },
  
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = () => {
      setLoading(true);
      try {
        // Shuffle questions and limit to 10
        const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
        setQuestions(shuffledQuestions);
      } catch (error) {
        setError("Failed to load questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {loading ? (
        <p>Loading questions...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : isFinished ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        questions.length > 0 && (
          <Question
            question={questions[currentQuestion]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )
      )}
    </div>
  );
}

export default Quiz;