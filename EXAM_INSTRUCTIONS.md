# Developer Exam - Mid-Level Position

**Time Limit:** 45 minutes
**Tech Stack:** React, Node.js, TypeScript, PostgreSQL

---

## Overview

Welcome to the developer assessment! This exam tests your ability to:
- Set up a development environment
- Debug and fix issues in a full-stack application
- Work with databases
- Implement UI features with modern React patterns

This is a **User Management System** with intentional bugs and incomplete setup. Your job is to get it working correctly.

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker & Docker Compose (for PostgreSQL)
- Basic understanding of React, Express, and PostgreSQL

### Project Structure
```
developer-exam/
├── backend/          # Express + TypeScript API
├── frontend/         # React + Vite + ShadCN UI
├── docker-compose.yml
└── EXAM_INSTRUCTIONS.md (this file)
```

---

## Your Tasks

### Phase 1: Environment Setup (10-15 minutes)

#### Task 1.1: Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

**Expected Issue:** You may encounter missing dependencies. Install any that are missing.

#### Task 1.2: Configure Environment Variables

Both projects have `.env.example` files. Create `.env` files based on these examples.

**Backend** (`backend/.env`):
- Configure the `DATABASE_URL` correctly
- The database credentials are in `docker-compose.yml`
- Format: `postgresql://username:password@host:port/database`

**Frontend** (`frontend/.env`):
- Configure the `VITE_API_URL` to point to your backend server
- Check what port the backend server runs on

#### Task 1.3: Start PostgreSQL Database

```bash
# From the root directory
docker-compose up -d
```

#### Task 1.4: Set Up Database Schema

```bash
cd backend
npm run db:migrate
npm run db:seed
```

**Note:** Make sure your DATABASE_URL environment variable is set before running these commands.

---

### Phase 2: Fix Backend Issues (10-15 minutes)

#### Task 2.1: Start the Backend Server

```bash
cd backend
npm run dev
```

**Problem:** The server may crash or not work correctly. Find and fix the issues.

**Hints:**
- Check the server startup code
- Look for async/await issues
- Check if all required packages are installed

#### Task 2.2: Test API Endpoints

Once the server runs, test the health endpoint:
```bash
curl http://localhost:3001/api/health
```

Then test the users endpoint:
```bash
curl http://localhost:3001/api/users
```

**Problem:** The `/api/users` endpoint works but is inefficient. Identify and fix the database query issue.

**Hint:** Look for N+1 query problems in `backend/src/routes/users.ts`

---

### Phase 3: Fix Frontend Issues (10-15 minutes)

#### Task 3.1: Start the Frontend Dev Server

```bash
cd frontend
npm run dev
```

**Problem:** The frontend may not connect to the backend properly. Fix any connection issues.

**Hints:**
- Check the API URL configuration
- Look for CORS errors in the browser console
- Verify the backend is running on the correct port

#### Task 3.2: Fix Form Bugs

Once the application loads, try creating a new user:

**Problems to fix:**
1. The form doesn't clear after successful submission
2. The submit button should be disabled while loading
3. The user list may not refresh properly

**Files to check:**
- `frontend/src/components/UserForm.tsx`
- `frontend/src/App.tsx`

---

### Phase 4: Verify Everything Works (5 minutes)

#### Complete These Actions:

- [ ] Backend server runs without errors
- [ ] Frontend application loads in browser
- [ ] Can view the list of existing users (5 users with posts)
- [ ] Can create a new user via the form
- [ ] Form clears after submission
- [ ] New user appears in the list immediately
- [ ] Submit button is disabled during submission
- [ ] No errors in browser console or terminal

---

## Success Criteria

Your solution will be evaluated on:

1. **Environment Setup (20%)**
   - Correctly configured environment variables
   - Database connection working
   - All dependencies installed

2. **Bug Fixing (40%)**
   - Backend server starts successfully
   - Database query optimization
   - CORS configured correctly
   - Frontend bugs resolved

3. **Code Quality (20%)**
   - Clean, readable fixes
   - Following existing code patterns
   - Proper error handling

4. **Problem-Solving Approach (20%)**
   - Systematic debugging
   - Understanding of the issues
   - Ability to explain fixes

---

## Common Issues & Debugging Tips

### Backend won't start
- Check your `.env` file exists and has correct DATABASE_URL
- Ensure PostgreSQL is running (`docker ps`)
- Look for error messages about missing packages

### Frontend can't connect to backend
- Verify backend is running on the correct port
- Check `.env` file in frontend
- Look for CORS errors in browser console
- Check that both servers are running

### Database connection fails
- Verify Docker container is running: `docker ps`
- Check database credentials in `docker-compose.yml`
- Ensure DATABASE_URL format is correct
- Try connecting with: `docker exec -it user-management-db psql -U dev_user -d user_management`

### Form doesn't work
- Open browser DevTools (F12) and check Console tab
- Look for error messages in Network tab
- Check the Components tab to see state updates

---

## Submission

When you're finished:

1. Ensure both servers are running
2. Demonstrate the working application
3. Be prepared to explain:
   - What bugs you found
   - How you fixed them
   - Why the bugs existed
   - Any improvements you would make

---

## Questions?

If you encounter issues that seem like environment problems (not intentional bugs), please ask. We want to test your development skills, not your ability to fight tooling issues.

Good luck! 🚀
