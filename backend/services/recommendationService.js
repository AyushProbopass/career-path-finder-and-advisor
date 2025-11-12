const fs = require('fs');
const path = require('path');

class RecommendationService {
  constructor() {
    this.jobs = this.loadJSON('jobs.json');
    this.paths = this.loadJSON('paths.json');
  }

  loadJSON(filename) {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }

  getAllSkills() {
    const skillsSet = new Set();
    this.jobs.forEach(job => {
      job.required_skills.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet).map(skill => ({
      id: skill,
      name: skill.charAt(0).toUpperCase() + skill.slice(1).replace('-', ' ')
    }));
  }

  getAllIndustries() {
    const industriesSet = new Set();
    this.jobs.forEach(job => industriesSet.add(job.industry));
    return Array.from(industriesSet);
  }

  calculateMatchScore(job, userSkills, userInterests) {
    let score = 0;
    
    // Skill match (60% weight)
    const skillMatch = job.required_skills.filter(skill => 
      userSkills.includes(skill)
    ).length;
    const skillScore = (skillMatch / job.required_skills.length) * 60;
    score += skillScore;
    
    // Industry interest match (30% weight)
    if (userInterests.includes(job.industry.toLowerCase())) {
      score += 30;
    }
    
    // Growth potential (10% weight)
    score += (job.growth_score / 10) * 10;
    
    return Math.round(score);
  }

  getRecommendations(userSkills, userInterests, experienceLevel = 'entry') {
    // Filter jobs by experience level
    let eligibleJobs = this.jobs.filter(job => 
      job.experience_level === experienceLevel || 
      (experienceLevel === 'entry' && job.experience_level === 'mid')
    );

    // Calculate match scores
    const recommendations = eligibleJobs.map(job => {
      const matchScore = this.calculateMatchScore(job, userSkills, userInterests);
      const missingSkills = job.required_skills.filter(skill => 
        !userSkills.includes(skill)
      );
      const hasSkills = job.required_skills.filter(skill => 
        userSkills.includes(skill)
      );

      return {
        ...job,
        match_score: matchScore,
        missing_skills: missingSkills,
        has_skills: hasSkills,
        skill_gap_percentage: Math.round(
          (missingSkills.length / job.required_skills.length) * 100
        )
      };
    });

    // Sort by match score and return top 5
    const inrFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

    return recommendations
      .sort((a, b) => b.match_score - a.match_score)
      .slice(0, 5)
      .map(job => ({
        ...job,
        career_path: this.getCareerPath(job.title, inrFormatter),
        salary_range_formatted: `${inrFormatter.format(job.salary_range[0])} - ${inrFormatter.format(job.salary_range[1])}`
      }));
  }

  getCareerPath(jobTitle, formatter) {
    const path = this.paths[jobTitle] || [];
    const detailedPath = path.map(nextJob => {
      const jobDetails = this.jobs.find(j => j.title === nextJob);
      if (jobDetails) {
        const salaryFormatted = formatter
          ? `${formatter.format(jobDetails.salary_range[0])} - ${formatter.format(jobDetails.salary_range[1])}`
          : undefined;

        return {
          title: nextJob,
          salary_range: jobDetails.salary_range,
          salary_range_formatted: salaryFormatted,
          required_skills: jobDetails.required_skills,
          experience_level: jobDetails.experience_level
        };
      }
      return { title: nextJob };
    });

    return {
      current: jobTitle,
      next_steps: detailedPath
    };
  }
}

module.exports = RecommendationService;