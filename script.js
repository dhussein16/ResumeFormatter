function updateResume() {
    // Get input values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
  
    // Update preview
    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-title').innerText = title;
    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-experience').innerText = experience;
  }
  
  function downloadPDF() {
    const resume = document.getElementById('resume-preview');
    
    // Generate PDF from the resume-preview div
    html2pdf()
      .from(resume)
      .set({
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
      })
      .save();
  }
  