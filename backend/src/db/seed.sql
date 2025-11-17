-- Seed data for users table
INSERT INTO users (name, email, department) VALUES
  ('Alice Johnson', 'alice@example.com', 'Engineering'),
  ('Bob Smith', 'bob@example.com', 'Design'),
  ('Carol Williams', 'carol@example.com', 'Engineering'),
  ('David Brown', 'david@example.com', 'Marketing'),
  ('Eve Davis', 'eve@example.com', 'Engineering');

-- Seed data for posts table
INSERT INTO posts (user_id, title, content) VALUES
  (1, 'Getting Started with TypeScript', 'TypeScript is a powerful typed superset of JavaScript...'),
  (1, 'Database Design Best Practices', 'When designing a database schema, consider normalization...'),
  (2, 'UI/UX Principles', 'Great design is invisible. Users should never have to think...'),
  (2, 'Color Theory in Web Design', 'Understanding color psychology can greatly improve...'),
  (3, 'React Performance Optimization', 'Memoization and lazy loading are key techniques...'),
  (3, 'Building Scalable APIs', 'RESTful design patterns help create maintainable APIs...'),
  (4, 'Content Marketing Strategy', 'Engaging content is the foundation of digital marketing...'),
  (5, 'Testing Node.js Applications', 'Unit tests and integration tests serve different purposes...'),
  (5, 'Docker for Development', 'Containerization makes development environments consistent...'),
  (5, 'CI/CD Best Practices', 'Automated testing and deployment improve code quality...');

-- Verify seed data
SELECT 'Seed data inserted successfully' AS status;
SELECT 'Users: ' || COUNT(*) FROM users;
SELECT 'Posts: ' || COUNT(*) FROM posts;
