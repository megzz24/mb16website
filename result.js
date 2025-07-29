const params = new URLSearchParams(window.location.search);
const name = params.get("username") || "User";
const mbti = params.get("mbti") || "XXXX";

document.getElementById("name").textContent = name;
document.getElementById("mbti").textContent = mbti;

const descriptions = {
  INFP: "Idealistic, loyal to their values, curious, and adaptable.",
  ENFP: "Enthusiastic, creative, sociable free spirit.",
  INFJ: "Insightful, organized, determined, and empathetic.",
  ENFJ: "Charismatic, inspiring leaders, empathetic and warm.",
  INTJ: "Strategic, logical, confident, and independent.",
  ENTJ: "Bold, imaginative, strong-willed leaders.",
  INTP: "Analytical, objective, and abstract thinkers.",
  ENTP: "Inventive, enthusiastic, strategic thinkers.",
  ISFJ: "Warm, responsible, and committed to helping others.",
  ESFJ: "Caring, social, and loyal team players.",
  ISTJ: "Serious, dutiful, practical, and organized.",
  ESTJ: "Efficient, organized, and value tradition.",
  ISFP: "Gentle, sensitive, artistic, and spontaneous.",
  ESFP: "Playful, enthusiastic, enjoy life and experiences.",
  ISTP: "Practical, observant, flexible problem-solvers.",
  ESTP: "Energetic, perceptive, and love the spotlight."
};

document.getElementById("description").textContent =
  descriptions[mbti] || "No description available.";
