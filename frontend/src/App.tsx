// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

// Shared pages
import Home from "./pages/shared/Home";
import ConversationBoard from "./pages/shared/ConversationBoard";
import Profile from "./pages/shared/Profile";
import Settings from "./pages/shared/Settings";

// Reader pages
import ReaderDashboard from "./pages/reader/ReaderDashboard";
import Library from "./pages/reader/Library";
import BookReader from "./pages/reader/BookReader";

// Writer pages
import WriterDashboard from "./pages/writer/WriterDashboard";
import MyBooks from "./pages/writer/MyBooks";
import BookEditor from "./pages/writer/BookEditor";


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Shared */}
        <Route path="/" element={<Home />} />
        <Route path="/conversation" element={<ConversationBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Reader */}
        <Route path="/reader/dashboard" element={<ReaderDashboard />} />
        <Route path="/reader/library" element={<Library />} />
        <Route path="/reader/book/:id" element={<BookReader />} />

        {/* Writer */}
        <Route path="/writer/dashboard" element={<WriterDashboard />} />
        <Route path="/writer/books" element={<MyBooks />} />
        <Route path="/writer/book/edit/:id" element={<BookEditor />} />
        

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
