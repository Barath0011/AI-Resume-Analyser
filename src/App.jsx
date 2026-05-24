import "./App.css";
import { useState, useRef } from "react";
function App() {
  
const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);
  const clear = () => { setFile(null); };
const inputRef = useRef(null);
  {file && (
  <p>
    Uploaded: {file.name}
  </p>
  )}
  const handleAnalyze = () => {
   if (!file) {
    alert("Please upload a resume!");
    return;
  }
  const clear = () => {
  setFile(null);
  inputRef.current.value = "";
};

  setResult({
    score: 82,
    strengths: [
      "Strong React skills",
      "Good project experience",
      "Clean resume structure"
    ],
    improvements: [
      "Add more AI projects",
      "Improve resume summary",
      "Include GitHub links"
    ]
  });
  

  alert(`Analyzing ${file.name}`);
};

  return (
    <div>
      <nav> <h1>ResumeAI 🚀
        </h1>

        <button class="login"> Login
        </button>
      </nav>
        
      
      <section>

        <h1> Analyze Your Resume With AI
        </h1>

        <p>Upload your resume and receive instant AI-powered
          feedback, ATS scoring, and improvement suggestions.
        </p>

        
        <div>
          
         <lable>
              <h1>
                Upload your resume
              </h1>
         </lable>
         <button class="choosefile">
         
          
         <input type="file" ref={inputRef} onChange={(e) => setFile(e.target.files[0])}/>
            
         </button>
         <br class="space" >
         </br>
          <button onClick={handleAnalyze}>
           Analyze Resume
          </button>
          <br>
          </br>
          <button onClick={clear}>
            
            Clear
          </button>
          {result && (

  <div className="mt-8 bg-zinc-800 p-6 rounded-2xl">

    <h2 className="text-2xl font-bold mb-4">
      ATS Score: {result.score}%
    </h2>

    <div className="mb-6">

      <h3 className="text-green-400 text-xl mb-2">
        Strengths
      </h3>

      <ul>
        {result.strengths.map((item, index) => (
          <li key={index}>
            ✅ {item}
          </li>
        ))}
      </ul>

    </div>

    <div>

      <h3 className="text-red-400 text-xl mb-2">
        Improvements
      </h3>

      <ul>
        {result.improvements.map((item, index) => (
          <li key={index}>
            ⚠️ {item}
          </li>
        ))}
      </ul>

    </div>

  </div>

)}

        </div>

      </section>

    </div>
    
  );
}

export default App;