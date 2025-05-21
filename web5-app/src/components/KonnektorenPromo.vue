<script setup>
</script>

<template>
  <div class="konnektoren-promo">
    <h2 class="promo-title">Check Out Konnektoren</h2>
    <div class="promo-content">
      <div class="promo-description">
        <p>
          <strong>Learn German grammar effortlessly!</strong> Konnektoren helps you master
          German grammar through interactive lessons, personalized learning paths, and
          verifiable credential badges to showcase your achievements.
        </p>
        <ul class="feature-list">
          <li>🌍 Multiple language platforms (DE, EN, ES)</li>
          <li>🎯 Interactive lessons with real-time feedback</li>
          <li>🏆 Earn verifiable credential badges</li>
          <li>📊 Track your progress with intuitive dashboards</li>
        </ul>
        <a href="https://konnektoren.help" target="_blank" class="cta-button">
          Start Learning German Today →
        </a>
      </div>
    </div>
    <div class="promo-footer">
      <p>Available for desktop and web • Mobile apps coming soon</p>
    </div>
  </div>
</template>

<style scoped>
.konnektoren-promo {
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 10px;
  background: linear-gradient(145deg, #2c3e50, #1a5e9a);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.promo-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.promo-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.promo-description {
  flex: 2;
}

.promo-description p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.feature-list li {
  padding: 0.25rem 0;
}

.cta-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #41b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #3ca676;
}

.promo-footer {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .promo-content {
    flex-direction: row;
  }
}
</style>
