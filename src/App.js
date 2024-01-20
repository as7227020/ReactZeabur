import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout"
import Homecompoent from "./components/home-component"
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import AuthService from "./services/auth.service";
import ProfileComponent from "./components/profile-component";
import CourseComponent from "./components/course-component";
import EnrollComponent from "./components/enroll-component";
import PostCourseComponent from "./components/postCourse-component";
function App() {
  
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
<Routes>
    <Route path="/" element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
      <Route index element={<Homecompoent/>}/>
      <Route path="register" element={<RegisterComponent />} />
      <Route path="login"element={ <LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/> }/>
      <Route path="profile" element={ <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
      <Route path="course" element={<CourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
      <Route path="enroll" element={<EnrollComponent currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
      <Route path="postCourse"element={ <PostCourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
    </Route>
    </Routes>
  );
}

export default App;
