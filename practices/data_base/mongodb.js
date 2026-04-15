const API_URL = 'http://localhost:3000/api/students';

        // CREATE: Handle form submission
        document.getElementById('studentForm').addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent page reload

            const math = parseInt(document.getElementById('mathMark').value);
            const english = parseInt(document.getElementById('englishMark').value);
            
            const studentData = {
                name: document.getElementById('name').value,
                total: math + english,
                marks: { math, english }
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData)
            });

            if (response.ok) {
                alert('Student added successfully!');
                document.getElementById('studentForm').reset();
                fetchStudents(); // Refresh the list
            }
        });

        // READ: Fetch and display students
        async function fetchStudents() {
            const listContainer = document.getElementById('studentList');
            listContainer.innerHTML = 'Loading...';

            const response = await fetch(API_URL);
            const students = await response.json();

            // Using array methods to build the HTML structure
            listContainer.innerHTML = students.length === 0 ? '<p>No students found.</p>' : '';
            
            students.map(student => {
                const div = document.createElement('div');
                div.className = 'student-card';
                div.innerHTML = `
                    <strong>${student.name}</strong> 
                    (Total: ${student.total}) <br>
                    Math: ${student.marks?.math || 0} | English: ${student.marks?.english || 0}
                `;
                listContainer.appendChild(div);
            });
        }

        document.getElementById('loadStudentsBtn').addEventListener('click', fetchStudents);