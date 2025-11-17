// src/api.js
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const API_BASE_URL = `${API}/api`;

export const careerAPI = {
  async getAllSkills() {
    const response = await fetch(`${API_BASE_URL}/career/skills`);
    return response.json();
  },

  async getAllIndustries() {
    const response = await fetch(`${API_BASE_URL}/career/industries`);
    return response.json();
  },

  async getRecommendations(userData) {
    const response = await fetch(`${API_BASE_URL}/career/recommend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  async getCareerPath(jobTitle) {
    const response = await fetch(`${API_BASE_URL}/career/path/${encodeURIComponent(jobTitle)}`);
    return response.json();
  }
};